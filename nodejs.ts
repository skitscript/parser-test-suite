import type { Document } from "@skitscript/types-nodejs";
import * as fs from "fs";
import * as path from "path";
import { identifierIsValid, parse } from "@skitscript/parser-nodejs";

describe(`parse`, () => {
  describe(`documents`, () => {
    const casesPath = path.join(__dirname, `document-cases`);

    const caseNames = fs.readdirSync(casesPath);

    for (const caseName of caseNames) {
      describe(caseName, () => {
        for (const newline of [`\n`, `\r`, `\r\n`]) {
          describe(`with a newline of ${JSON.stringify(newline)}`, () => {
            let document: Document;

            beforeAll(async () => {
              const source = await fs.promises.readFile(
                path.join(casesPath, caseName, `input.skitscript`),
                `utf8`
              );

              document = parse(source.replace(/\n/g, newline));
            });

            it(`parses to the expected document`, async () => {
              const outputText = await fs.promises.readFile(
                path.join(casesPath, caseName, `output.json`),
                `utf8`
              );
              const output = JSON.parse(outputText);

              expect(document).toEqual(output);
            });
          });
        }
      });
    }
  });

  describe(`identifiers`, () => {
    describe(`valid`, () => {
      const cases = fs.readFileSync(
        path.join(__dirname, `identifier-cases`, `valid.txt`),
        `utf8`
      );

      for (const line of cases.split(`\n`)) {
        if (line.trim() !== ``) {
          it(JSON.stringify(line), () => {
            expect(identifierIsValid(line)).toBeTrue();
          });
        }
      }
    });

    describe(`invalid`, () => {
      const cases = fs.readFileSync(
        path.join(__dirname, `identifier-cases`, `invalid.txt`),
        `utf8`
      );

      for (const line of cases.split(`\n`)) {
        it(JSON.stringify(line), () => {
          expect(identifierIsValid(line)).toBeFalse();
        });
      }
    });
  });
});
