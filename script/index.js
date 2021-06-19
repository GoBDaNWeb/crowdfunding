const themeBtn = document.querySelector('.icon-moon')
const theme = document.querySelector('.theme')
const bookmark = document.querySelector('.bookmarked')
const modalReward = document.querySelector('.modal-reward')
const modalProject = document.querySelector('.modal-project')
const closeBtn = document.querySelector('.btn-modal__close')
const projectBody = document.querySelector('.modal-project__body')
const projectItem = document.querySelectorAll('.modal-project__item')
const rewardBody = document.querySelector('.modal-reward__body')
const rewardBtn = document.querySelectorAll('.btn-reward')
const btnProject = document.querySelector('.btn-back')
const btnProjectClose = document.querySelector('.icon-cancel')
const radioBtn = document.getElementsByName('pledge')
const projectHideContent = document.querySelectorAll('.modal-item__hide')
const continueProjectBtn = document.querySelectorAll('.btn-project__continue')
const body = document.querySelector('body')
const burgerBtn = document.querySelector('.btn-burger')
const burger = document.querySelector('.burger')
const phoneMenu = document.querySelector('.header-content__nav')
const overlay = document.querySelector('.overlay')

themeBtn.addEventListener('click', () => {
    theme.classList.toggle('active')
    body.classList.toggle('dark-theme')
})

bookmark.addEventListener('click', () => {
    const textBookmark = bookmark.querySelector('p')
    if (textBookmark.textContent === 'Bookmark') {
        textBookmark.textContent = 'Bookmarked'
    } else if (textBookmark.textContent === 'Bookmarked') {
        textBookmark.textContent = 'Bookmark'
    }
    bookmark.classList.toggle('active')
})

for (const btn of rewardBtn) {
    btn.addEventListener('click', () => {
        modalReward.classList.add('active')
    })
}

closeBtn.addEventListener('click', () => {
    modalReward.classList.remove('active')
})

modalReward.addEventListener('click', (e) => {
    if (e.target === rewardBody) {
        modalReward.classList.remove('active')
    }
})
modalProject.addEventListener('click', (e) => {
    if (e.target === projectBody) {
        modalProject.classList.remove('active')
    }
})

btnProject.addEventListener('click', () => {
    modalProject.classList.add('active')
})

for (let i = 0; radioBtn.length > i; i++) {
    radioBtn[i].addEventListener('click', () => {
        if (radioBtn[0].checked) {
            projectHideContent[0].classList.add('active')
            projectHideContent[1].classList.remove('active')
            projectItem[0].classList.add('active')
            projectItem[1].classList.remove('active')
        } else if (radioBtn[1].checked) {
            projectHideContent[1].classList.add('active')
            projectHideContent[0].classList.remove('active')
            projectItem[1].classList.add('active')
            projectItem[0].classList.remove('active')
        }
    })
}

btnProjectClose.addEventListener('click', () => {
    modalProject.classList.remove('active')
})

for (const btn of continueProjectBtn) {
    btn.addEventListener('click', () => {
        modalProject.classList.remove('active')
        modalReward.classList.add('active')
    })
}

burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('active')
    phoneMenu.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    phoneMenu.classList.remove('active')
    overlay.classList.remove('active')
    burger.classList.remove('active')
})
