var simplifyPath = function (path) {
    const stack = []
    const components = path.split("/")

    for (const dir of components) {
        if (dir === "." || dir === "") continue;
        else if (dir === "..") stack.pop();
        else stack.push(dir);
    }

    return "/" + stack.join("/")
};