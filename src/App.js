import './main.scss';
import './Codeblock.scss';
import './app.css';
import ReactJson from 'react-json-view';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from './prismTheme';

function App() {
  const snippet = {
    npm: `import yorkie from 'yorkie-js-sdk';

async function main() {
  const client = new yorkie.Client('https://api.yorkie.dev', {
    apiKey: 'http://localhost:8080',
  });
  await client.activate();

  const doc = new yorkie.Document('my-first-document');
  await client.attach(doc);

  client.subscribe((event) => {
    if (event.type === 'peers-changed') {
      const peers = event.value[doc.getKey()];
      document.getElementById('peersCount').innerHTML = Object.entries(peers).length;
    }
  });
}
main();`,
    cdn: `<div>There are currently <span id='peersCount'></span> peers!</div>

<!-- include yorkie js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/yorkie-js-sdk/0.2.16/yorkie-js-sdk.js"></script>
<script>
  async function main() {
    const client = new yorkie.Client('https://api.yorkie.dev', {
      apiKey: 'http://localhost:8080',
    });
    await client.activate();

    const doc = new yorkie.Document('my-first-document');
    await client.attach(doc);

    client.subscribe((event) => {
      if (event.type === 'peers-changed') {
        const peers = event.value[doc.getKey()];
        document.getElementById('peersCount').innerHTML = Object.entries(peers).length;
      }
    });
  }
  main();
</script>`,
  };

  const documentJSON = {
    content:
      'This is a test of codepair\nIt seems no problem with normal typing\n\n\t- test\n\n- test\n\t- test\n\t\t- test test\n\n- But after write one dash\n\t- And write one tab and one dash\n\t\t- And last one more one tab and one dash, there is a problem\n',
    shapes: [
      {
        box: { height: 357.0, width: 337.0, x: 635.0, y: 43.0 },
        color: '#f3b328',
        points: [{ x: 1140.0, y: 121.0 }],
        type: 'rect',
      },
      {
        color: '#699e3d',
        points: [
          { x: 1064.0, y: 170.0 },
          { x: 1060.0, y: 170.0 },
          { x: 1054.0, y: 170.0 },
          { x: 1054.0, y: 206.0 },
          { x: 1052.0, y: 272.0 },
          { x: 984.0, y: 371.0 },
          { x: 885.0, y: 336.0 },
          { x: 882.0, y: 216.0 },
          { x: 1002.0, y: 177.0 },
          { x: 1103.0, y: 247.0 },
          { x: 1125.0, y: 283.0 },
        ],
        type: 'line',
      },
      {
        color: '#699e3d',
        points: [
          { x: 1049.0, y: 314.0 },
          { x: 1049.0, y: 314.0 },
          { x: 1058.0, y: 349.0 },
          { x: 1076.0, y: 368.0 },
          { x: 1100.0, y: 379.0 },
          { x: 1121.0, y: 368.0 },
          { x: 1137.0, y: 338.0 },
          { x: 1129.0, y: 303.0 },
          { x: 1070.0, y: 297.0 },
          { x: 1024.0, y: 342.0 },
          { x: 1032.0, y: 402.0 },
          { x: 1064.0, y: 412.0 },
          { x: 1113.0, y: 397.0 },
          { x: 1138.0, y: 373.0 },
          { x: 1136.0, y: 374.0 },
          { x: 1089.0, y: 455.0 },
          { x: 1007.0, y: 566.0 },
          { x: 908.0, y: 581.0 },
          { x: 841.0, y: 462.0 },
          { x: 940.0, y: 410.0 },
          { x: 1055.0, y: 429.0 },
          { x: 1096.0, y: 450.0 },
          { x: 1098.0, y: 457.0 },
          { x: 1085.0, y: 462.0 },
          { x: 1070.0, y: 460.0 },
          { x: 1046.0, y: 444.0 },
          { x: 1032.0, y: 405.0 },
          { x: 1086.0, y: 366.0 },
          { x: 1210.0, y: 399.0 },
          { x: 1232.0, y: 412.0 },
        ],
        type: 'line',
      },
    ],
  };
  const documentJSONStr = JSON.stringify(documentJSON, null, '\t');

  return (
    <div className='App'>
      <a href='https://github.com/chacha912/codeblock-example' target='_blank' rel='noreferrer' className='github'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
        github
      </a>
      <h2>Overview page - sample code</h2>
      <div className='codeblock_box'>
        <Highlight {...defaultProps} code={snippet.cdn} theme={theme} language='markup'>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre className={className}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className='line-number'>{i + 1}</span>
                  <span className='line-content'>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <h2>Document detail page - sample code(code view)</h2>
      <div className='codeblock_box'>
        <Highlight {...defaultProps} code={documentJSONStr} theme={theme} language='json'>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre className={className}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className='line-number'>{i + 1}</span>
                  <span className='line-content'>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <h2>Document detail page - sample code(tree view)</h2>
      <div className='codeblock_tree_box'>
        <ReactJson
          src={documentJSON}
          displayObjectSize={false}
          displayDataTypes={false}
          theme={{
            base00: 'null',
            base01: 'null',
            base02: 'null',
            base03: 'null',
            base04: 'null',
            base05: 'null',
            base06: 'null',
            base07: 'null',
            base08: 'null',
            base09: 'null',
            base0A: 'null',
            base0B: 'null',
            base0C: 'null',
            base0D: 'null',
            base0E: 'null',
            base0F: 'null',
          }}
        />
      </div>
    </div>
  );
}

export default App;
