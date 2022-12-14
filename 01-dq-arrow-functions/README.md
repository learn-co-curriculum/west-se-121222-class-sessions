# How to quickly create an HTML/CSS/JS environment with Vite

1. Navigate your terminal to a place where you want to create a new directory locally (on your machine).
2. Run `npm create vite@latest my-demo-app -- --template vanilla` where `my-demo-app` is whatever name you want.
3. If asked to install anything, respond `y`
4. Vite will scaffold a directory `my-demo-app` which will contain template HTML, CSS, and JS files.
5. You will also see directions in the terminal on how install and start your Vite server.
    - `cd my-demo-app`
    - `npm install`
    - `npm run dev`
6. The terminal should now display the URL where the Vite server is serving your HTML page, usually http://127.0.0.1:5173/

# Tips

- Do whatever you want with the boilerplate code in the JS files.  Replace it entirely with your own.
- Create your own JS file and control what loads with `<script>` tags in the HTML
- Add your own tags to the HTML to make it easier to practice your DOM manipulation.
- By the end of the week, you should be able to understand almost everything in the boilerplate files (we'll get into `import`s in Phase 2). Try to figure it out!