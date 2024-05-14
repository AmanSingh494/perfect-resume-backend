const Handlebars = require('handlebars')

Handlebars.registerHelper('generateEducationItem', (item) => {
  return `
        <div class="education-list ">
            <div class="education-item">
                <p class="font-ex-small">${item.course}</p>
            </div>
            <div class="education-item">
                <p class="font-ex-small">${item.institution}</p>
            </div>
            <div class="education-item">
                <p class="font-ex-small">${item.year}</p>
            </div>
            <div class="education-item">
                <p class="font-ex-small">${item.marks}</p>
            </div>
        </div>
    `
})

Handlebars.registerHelper('check_edu_empty', (arr) => {
  if (Object.keys(arr[0]).length === 0) {
    return
  }
  const firstObject = arr[0]
  for (let key in firstObject) {
    if (firstObject[key] === '') {
      return
    }
  }

  let educationItemsHtml = ''
  for (let item of arr) {
    educationItemsHtml += Handlebars.helpers.generateEducationItem(item)
  }

  return `
            <div class="education-section">
                <p class="font-medium titillium-web-semibold">Education</p>
                <div class="education">
                    <div class="education-list font-bold">
                        <div class="education-item">
                            <p class="font-small">Course / Examination</p>
                        </div>
                        <div class="education-item">
                            <p class="font-small">Institution</p>
                        </div>
                        <div class="education-item">
                            <p class="font-small">Year of passing</p>
                        </div>
                        <div class="education-item">
                            <p class="font-small">Performance</p>
                        </div>
                    </div>
                    ${educationItemsHtml}
                </div>
            </div>
        `
})

Handlebars.registerHelper('generateCourseItem', (item) => {
  return `
  <div class="list">
  <div class="list-heading titillium-web-semibold">
      <li>${item.course}</li>
      <p>${item.duration}</p>
  </div>
  <div class="indented-list">
      <li>${item.exp}</li>
  </div>
</div>
    `
})

Handlebars.registerHelper('check_course_empty', (arr) => {
  if (Object.keys(arr[0]).length === 0) {
    return
  }
  const firstObject = arr[0]
  for (let key in firstObject) {
    if (firstObject[key] === '') {
      return
    }
  }

  let courseItemsHtml = ''
  for (let item of arr) {
    courseItemsHtml += Handlebars.helpers.generateCourseItem(item)
  }

  return `
    <div class="courses">
    <p class="font-medium titillium-web-semibold">Additional Qualifications and Courses</p>
    <div class="black-div"></div>
    <div class="all-lists font-small">
        ${courseItemsHtml}
    </div>
</div>
        `
})

Handlebars.registerHelper('generateWorkItem', (item) => {
  return `
  <div class="list"> 
                    <div class="list-heading titillium-web-semibold">
                        <li>${item.company}</li>
                        <p>${item.start} - ${item.end}</p>
                    </div>
                    <div class="indented-list">
                        <li>Worked as ${item.position}</li>
                        <li>${item.exp}</li>
                    </div>
                </div>
    `
})

Handlebars.registerHelper('check_work_empty', (arr, name) => {
  if (Object.keys(arr[0]).length === 0) {
    return
  }
  const firstObject = arr[0]
  for (let key in firstObject) {
    if (firstObject[key] === '') {
      return
    }
  }

  let workItemsHtml = ''
  for (let item of arr) {
    workItemsHtml += Handlebars.helpers.generateWorkItem(item)
  }

  return `
    <div class="work">
            <p class="font-medium titillium-web-semibold"> ${name}</p>
            <div class="black-div"></div>
            <div class="all-lists font-small">
                ${workItemsHtml}
            </div>
        </div>
        `
})

Handlebars.registerHelper('generateAchievementsItem', (item) => {
  return `
  <div class="list">
  <div class="list-heading">
      <li><span class="titillium-web-semibold">${item.name} position</span> at ${item.event}
          organised by ${item.organiser}</li>
      <p class="titillium-web-semibold">${item.year}</p>

  </div>
</div>
    `
})

Handlebars.registerHelper('check_achievements_empty', (arr) => {
  if (Object.keys(arr[0]).length === 0) {
    return
  }
  const firstObject = arr[0]
  for (let key in firstObject) {
    if (firstObject[key] === '') {
      return
    }
  }

  let achievementsItemsHtml = ''
  for (let item of arr) {
    achievementsItemsHtml += Handlebars.helpers.generateAchievementsItem(item)
  }

  return `
    <div class="achievements">
            <p class="font-medium titillium-web-semibold">Awards / Achievements</p>
            <div class="black-div"></div>
            <div class="all-lists font-small">
                ${achievementsItemsHtml}
            </div>
        </div>
        `
})

Handlebars.registerHelper('generateSkillItem', (item) => {
  return `
  <li><span class="titillium-web-semibold">${item.skill}</span><span> - ${item.level}</span></li>
    `
})

Handlebars.registerHelper('check_skill_empty', (arr) => {
  if (Object.keys(arr[0]).length === 0) {
    return
  }
  const firstObject = arr[0]
  for (let key in firstObject) {
    if (firstObject[key] === '') {
      return
    }
  }

  let itemsHtml = ''
  for (let item of arr) {
    itemsHtml += Handlebars.helpers.generateSkillItem(item)
  }

  return `
    <div class="skills">
            <p class="font-medium titillium-web-semibold">Skills</p>
            <div class="black-div"></div>
            <div class="all-lists font-small">
                <div class="list">
                    ${itemsHtml}
                </div>
            </div>
        </div>
        `
})
