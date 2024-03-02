import handlebars from 'handlebars';
import fs from 'fs';

export class About {
    private template: Handlebars.TemplateDelegate;

    constructor(templatePath: string) {
        const templateString = fs.readFileSync(templatePath, 'utf8');
        this.template = handlebars.compile(templateString);
    }

    render(container: HTMLElement, data: { title: string, content: string }) {
        const html = this.template(data);
        container.innerHTML = html;
    }
}
