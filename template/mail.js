
const mailTemplate = (title,msg) => {
    return `<div>
                    <h1>${ title } </h1>
                    <hr />
                    <div>
                    ${ msg }
                    </div>
            </div>`
}

module.exports = mailTemplate;
