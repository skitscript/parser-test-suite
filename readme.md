# Skitscript Parser Test Suite [![Continuous Integration](https://github.com/skitscript/parser-test-suite/workflows/Continuous%20Integration/badge.svg)](https://github.com/skitscript/parser-test-suite/actions) [![License](https://img.shields.io/github/license/skitscript/parser-test-suite.svg)](https://github.com/skitscript/parser-test-suite/blob/master/license) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

A test suite for parsers of Skitscript documents.

## Installation

It is recommended to install this as a Git submodule and use the included test
cases in your project's test suite:

```bash
git submodule add https://github.com/skitscript/parser-test-suite submodules/skitscript/parser-test-suite
```

### Renovate Updates

If you are using Renovate in your project, add
[the following](https://docs.renovatebot.com/modules/manager/git-submodules/) to
its `renovate.json` to automatically raise PRs when changes are pushed to this
repository:

```json
{
  "git-submodules": {
    "enabled": true
  }
}
```

## Usage

### Document cases

The [document-cases](./document-cases) directory contains a large number of
subdirectories.  Each contains a standard set of files:

### [input.skitscript](./document-cases/valid/input.skitscript)

This is the Skitscript file which is to be fed into the parser during the test
case.  Line endings here are LF (`0x0A`); for full specification coverage,
re-run the test suite with line endings replaced with CR (`0x0D`) and
CRLF (`0x0D0A`).

### [output.json](./document-cases/valid/output.json)

This is a JSON representation of the events expected to be output by the parser
in response.

### Identifier cases

The [identifier-cases](./identifier-cases) directory contains two files;
[valid.txt](./identifier-cases/valid.txt) and
[invalid.txt](./identifier-cases/invalid.txt).  Each is a UTF-8 encoded,
LF-delimited list of valid and invalid identifies respectively.
