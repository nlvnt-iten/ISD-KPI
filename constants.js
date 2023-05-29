const envs = process.env

const response = {
    name: envs.NAME,
    surname: envs.SURNAME,
    course: envs.COURSE,
    group: envs.GROUP
}

module.exports = response
