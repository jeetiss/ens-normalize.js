import {writeFile, mkdir} from 'node:fs/promises';
import {parse_version} from './utils.js';

const FILES = [
	// UCD
	['{SPEC}/ucd/UnicodeData.txt'],
	// IDNA
	['{IDNA}/IdnaMappingTable.txt'],
	['{IDNA}/IdnaTestV2.txt', /*old*/'{IDNA}/IdnaTest.txt'],
	// NF
	['{SPEC}/ucd/CompositionExclusions.txt'],
	['{SPEC}/ucd/DerivedNormalizationProps.txt'],
	['{SPEC}/ucd/NormalizationTest.txt'],
	// Emoji
	['{SPEC}/ucd/emoji/emoji-data.txt', /*old*/'{EMOJI}/emoji-data.txt'],
	['{EMOJI}/emoji-sequences.txt'],
	['{EMOJI}/emoji-zwj-sequences.txt'],
	['{EMOJI}/emoji-test.txt'],
	/*
	// Confusables
	['{SPEC}/ucd/Scripts.txt'],
	['{SPEC}/ucd/ScriptExtensions.txt'],
	['{SPEC}/ucd/PropertyValueAliases.txt'],
	['{SPEC}/confusables.txt'],
	*/
];

function url_from_source(source, {major, minor = 0, patch = 0}) {
	const UNICODE_BASE = `https://www.unicode.org/Public`;
	let bases = {
		'SPEC': `${UNICODE_BASE}/${major}.${minor}.${patch}`,
		'IDNA': `${UNICODE_BASE}/idna/${major}.${minor}.${patch}`,
		'EMOJI': `${UNICODE_BASE}/emoji/${major}.${minor}`,
		'SECURITY': `${UNICODE_BASE}/security/${major}.${minor}.${patch}`,
	};
	return new URL(source.replace(/\{([A-Z]+)\}/g, (_, key) => {
		let base = bases[key];
		if (!base) throw new Error(`Unknown base: ${key}`);
		return base;
	}));
}

let versions = process.argv.slice(2).flatMap(parse_version);
console.log(versions);

for (let version of versions) {
	await download(version, FILES);
}

async function download({major, minor, patch}, files) {
	let dir = new URL(`./data/${major}.${minor}.${patch}/`, import.meta.url);	
	console.log(`Downloading ${major}.${minor}.${patch} (${files.length} files)`);
	for (let sources of files) {
		let urls = sources.map(s => url_from_source(s, {major, minor, patch}));
		try {
			let [i, buf] = await Promise.any(urls.map(async (url, i) => {
				let res = await fetch(url);
				if (res.status != 200) throw new Error(`HTTP error ${res.status}`);
				return [i, await res.arrayBuffer()];
			}));
			let name = urls[i].pathname.split('/').pop();
			await mkdir(dir, {recursive: true});
			await writeFile(new URL(name, dir), Buffer.from(buf));
			console.log(`[${i+1}/${sources.length}] ${urls[i]}`);
		} catch (err) {
			if (err instanceof AggregateError) {
				for (let i = 0; i < sources.length; i++) {
					console.log(`${i+1}. ${sources[i]} => ${urls[i]}`);
					console.log(err.errors[i]);
				}
			} else {
				console.log(err);
			}
			throw new Error(`Download failed`);
		}
	}
	await writeFile(new URL('version.json', dir), JSON.stringify({major, minor, patch, date: new Date()}));	
}