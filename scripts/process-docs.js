const fs = require("fs");
const path = require("path");

const DOCS_DIR = "wiki-docs";
const API_REFERENCE = "API Reference.md";
function generateApiReference(files) {
    const content = ["# API Reference\n"];

    const categories = { Classes: [], Interfaces: [], Functions: [] };

    files.forEach(file => {
        const name = file.replace(".md", "");
        console.log(`Processing file: ${name}`); // 调试日志

        // 如果文件名是 "classes"，解析其中的内容
        if (name === "classes") {
            const filePath = path.join(DOCS_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");

            // 使用正则表达式提取类名
            const matches = fileContent.match(/## ([A-Za-z0-9_]+)/g);
            if (matches) {
                matches.forEach(match => {
                    const className = match.replace("## ", "");
                    categories.Classes.push(className);
                });
            }
        }
    });

    console.log("Categories:", categories); // 调试日志

    Object.entries(categories).forEach(([category, items]) => {
        if (items.length > 0) {
            content.push(`## ${category}`);
            items.forEach(item => {
                content.push(`- [${item}](${item})`);
            });
            content.push("");
        }
    });

    fs.writeFileSync(path.join(DOCS_DIR, "API Reference.md"), content.join("\n"));
    console.log("✅ Generated API Reference.md");
}
// Get all markdown files
function getMarkdownFiles() {
    return fs.readdirSync(DOCS_DIR)
        .filter(file => file.endsWith(".md") && file !== "README.md");
}


function replaceReadmeLinks(files) {
    files.forEach(file => {
        const filePath = path.join(DOCS_DIR, file);
        let content = fs.readFileSync(filePath, "utf8");

        // 替换指向 README.md 的链接为 API Reference.md
        content = content.replace(/\[.*?\]\(README\.md\)/g, "[API Reference](API Reference)");

        fs.writeFileSync(filePath, content);
        console.log(`🔗 Replaced README.md links in ${file}`);
    });
}
// Delete README.md (if exists)
function deleteReadme() {
    const readmePath = path.join(DOCS_DIR, "README.md");
    if (fs.existsSync(readmePath)) {
        fs.unlinkSync(readmePath);
        console.log("✅ Removed README.md");
    }
}

// Create API Reference.md
function generateApiReference(files) {
    const content = ["# API Reference\n"];

    const categories = { Classes: [], Interfaces: [], Functions: [] };

    files.forEach(file => {
        const name = file.replace(".md", "");
        if (name.startsWith("I")) {
            categories.Interfaces.push(name);
        } else if (name.endsWith("Class")) {
            categories.Classes.push(name);
        } else {
            categories.Functions.push(name);
        }
    });

    Object.entries(categories).forEach(([category, items]) => {
        if (items.length > 0) {
            content.push(`## ${category}\n`);
            items.forEach(item => content.push(`- [${item}](${item})`));
            content.push("");
        }
    });

    fs.writeFileSync(path.join(DOCS_DIR, API_REFERENCE), content.join("\n"));
    console.log("✅ Created API Reference.md");
}

// Fix links to be GitHub Wiki-compatible
function fixMarkdownLinks(files) {
    files.forEach(file => {
        const filePath = path.join(DOCS_DIR, file);
        let content = fs.readFileSync(filePath, "utf8");

        content = content.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, "[$1]($2)");

        fs.writeFileSync(filePath, content);
        console.log(`🔗 Fixed links in ${file}`);
    });
}

// Generate Sidebar
function generateSidebar(files) {
    const sidebar = ["# Sidebar\n\n## API Reference"];
    files.forEach(file => {
        const name = file.replace(".md", "");
        sidebar.push(`- [${name}](${name})`);
    });

    fs.writeFileSync(path.join(DOCS_DIR, "Sidebar.md"), sidebar.join("\n"));
    console.log("✅ Created Sidebar.md");
}

// Run all tasks
function processDocs() {
    const files = getMarkdownFiles();
    deleteReadme();
    generateApiReference(files);
    fixMarkdownLinks(files);
    generateSidebar(files);
    replaceReadmeLinks(files);
}

processDocs();
