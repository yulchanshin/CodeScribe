import { serveCommand } from "./commands/serve.js";
import { program } from 'commander';
program
    .addCommand(serveCommand);
program.parse(process.argv);
//# sourceMappingURL=index.js.map