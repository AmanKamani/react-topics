export interface FormFields {
    name: string,
    email: string,
    address: string,
    age?: number,
    social?: SocialFields,
    numbers?: string[]
    hobbies?: string[]
}

export interface SocialFields {
    github: string,
    linkedin: string
}
