document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal');

    const files = {
        'önskelista.txt': `
- En ny släde med GPS
- Fler morötter till renarna
- En prenumeration på "Tomtens Verkstad Weekly"
- Världsfred
`,
        'snäll-eller-stygg.log': `
[2025-12-01] Nisse: Snäll (putsade tomtens skor)
[2025-12-05] Grankotten: Stygg (åt upp alla pepparkakor)
[2025-12-12] Stjärnan: Snäll (hjälpte till att slå in paket)
[2025-12-23] Du: Snäll (besökte denna terminal!)
`
    };

    const commands = {
        help: () => {
            printOutput(`
Tillgängliga kommandon:
  help      - Visar denna hjälptext.
  ls        - Listar filer i den nuvarande katalogen.
  cat <fil> - Visar innehållet i en fil.
  date      - Visar dagens datum.
  whoami    - Vem är du?
  santa     - Få ett meddelande från tomten.
  reboot    - Startar om terminalen.
  clear     - Rensar skärmen.
            `);
        },
        ls: () => {
            printOutput(Object.keys(files).join('  '));
        },
        cat: (args) => {
            const filename = args[0];
            if (!filename) {
                printOutput('cat: missing operand');
                return;
            }
            if (files[filename]) {
                printOutput(files[filename]);
            } else {
                printOutput(`cat: ${filename}: No such file or directory`);
            }
        },
        date: () => {
            printOutput('ons dec 24 2025 12:00:00 GMT+0100 (Mellaneuropeisk normaltid) - Det är julafton!');
        },
        whoami: () => {
            printOutput('Du är en av tomtens små hjälpredor!');
        },
        santa: () => {
            printOutput(`
                 *
                / \\
               /   \\
              /_____\\
             ( (o) )
            (   .   )
           (    _    )
           (_________)
        Ho ho ho! God Jul!
            `);
        },
        reboot: () => {
            printOutput('Systemet startas om...');
            setTimeout(() => {
                output.innerHTML = '';
                printOutput(welcomeMessage);
            }, 1000);
        },
        clear: () => {
            output.innerHTML = '';
        }
    };

    const welcomeMessage = `
****************************************************
*                                                  *
*      Välkommen till Tomtens Terminal! 🎅       *
*                                                  *
*  Skriv 'help' för att se en lista över          *
*  tillgängliga kommandon.                        *
*                                                  *
****************************************************
`;

    function printOutput(message) {
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
        terminal.scrollTop = terminal.scrollHeight;
    }

    function executeCommand(commandString) {
        printOutput(`> ${commandString}`);
        const [command, ...args] = commandString.trim().split(' ');

        if (commands[command]) {
            commands[command](args);
        } else {
            printOutput(`bash: command not found: ${command}`);
        }
        input.value = '';
        terminal.scrollTop = terminal.scrollHeight;
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeCommand(input.value);
        }
    });

    // Refocus on input when clicking the terminal
    terminal.addEventListener('click', () => {
        input.focus();
    });

    printOutput(welcomeMessage);
    input.focus();
});
