An explanation of the Firefox Source Code Directory Structure and links to
project pages with documentation can be found at:

    https://firefox-source-docs.mozilla.org/contributing/directory_structure.html

For information on how to build Firefox from the source code and create the patch see:

    https://firefox-source-docs.mozilla.org/contributing/contribution_quickref.html

If you have a question about developing Firefox, and can't find the solution
on https://firefox-source-docs.mozilla.org/, you can try asking your question on Matrix at chat.mozilla.org in `Introduction` (https://chat.mozilla.org/#/room/#introduction:mozilla.org) channel.


Nightly development builds can be downloaded from:

    https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/
            - or -
    https://www.mozilla.org/firefox/channel/desktop/#nightly

Keep in mind that nightly builds, which are used by Firefox developers for
testing, may be buggy.

Setup:

    - Clone this repository
    - Add `mozilla-unified` repository: `git remote add hg hg::https://hg.mozilla.org/mozilla-unified`
    - Install `git-cinnabar`: https://github.com/glandium/git-cinnabar/ (see the Setup section in the README — essentially just clone it somewhere, put the path to your local clone in your PATH, then install the native helper, and update the config if you wan to use Python3)
    - Pull the files from `mozilla-unified`: `git pull hg`
    - `./mach bootstrap` --> Choosing a build type
    - `./mach build`
    - `./mach run`
