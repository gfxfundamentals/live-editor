# GFXFundamentals Live Editor

This is the live code editor used on
[WebGPUFundamentals](https://webgpufundamentals.org),
[WebGLFundamentals](https://webglfundamentals.org),
[WebGL2Fundamentals](https://webgl2fundamentals.org), and
the [three.js manual](https://threejs.org/manual/#en/fundamentals).

It's based on the [Monaco Editor](https://microsoft.github.io/monaco-editor/)
which is the editor portion of Visual Studio Code

The goal was to be similar to JSFiddle or Codepen but client side only
so there's several hacks. The biggest one is you call it with a url
encoded in the query parameters. It then fetches that URL and parses
it with brittle regular expressions. Because the input is under my
control, it's only samples I've written or approved, I'm not too worried
about using brittle regular expressions.

While parsing it needs to make all paths to external files to be
fully qualified domain URLs. That is all links to images, videos,
scripts, audio, CSS, workers, etc. It does some of this with
user configured functions. The reason it needs to do this is because
it runs the actual samples as blobs. There are no blob relative paths
so all paths need to be fully qualified.

It has some support for handling workers, something even codepen
and jsfiddle don't seem to easily support.

It also has support for providing editor line relative errors for
JavaScript. In other words, JavaScript gets an error at line 475
in the actual blob that is running but in the editor in JavaScript
it might be line 17. The JavaScript errors can be caught via a
helper that is inserted into the blob which are then sent to the
editor which can generate a relative line number and then move
the cursor to the appropriate line.

The biggest drawback is the JavaScript debugger in the browser
will lose all breakpoints every time the user's code is run since
a new blob is generated so the debugger can't associate previous
breakpoints.

In its current form it is probably not entirely stand alone and is
pretty hacky. I just separated out as I finally got tired of manually
propogating changes between repos.

