interface HomeResponse {
  data: {
    user: User
    skills: Array<Skill>
    experiences: Array<Experience>
    educations: Array<Education>
    histories: Array<History>
  }
}
