export interface IDocumentation {
    judul: string;
    deskripsi: string;
    gambar: string;
    kategori: string;
}

export class Portfolio {
    private _nama: string;
    private _peran: string;
    private _tentang: string;
    private _tools: string[];
    private _skills: string[];
    private _documentation: IDocumentation[];

    constructor(
        nama: string,
        peran: string,
        tentang: string,
        tools: string[],
        skills: string[],
        documentation: IDocumentation[]
    ) {
        this._nama = nama;
        this._peran = peran;
        this._tentang = tentang;
        this._tools = tools;
        this._skills = skills;
        this._documentation = documentation;
    }

    // Getter Methods
    public get nama(): string {
        return this._nama;
    }

    public get peran(): string {
        return this._peran;
    }

    public get tentang(): string {
        return this._tentang;
    }

    public get tools(): string[] {
        return this._tools;
    }

    public get skills(): string[] {
        return this._skills;
    }

    public get documentation(): IDocumentation[] {
        return this._documentation;
    }

    // Business Logic Methods (OOP)
    public addSkill(skillBaru: string): void {
        this._skills.push(skillBaru);
    }

    public addTool(toolBaru: string): void {
        this._tools.push(toolBaru);
    }

    public addDocumentation(item: IDocumentation): void {
        this._documentation.push(item);
    }

    public getTotalProjects(): number {
        return this._documentation.length;
    }
}