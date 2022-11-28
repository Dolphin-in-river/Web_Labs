(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenToSubmit()
        displayFeedbacks()
    })
})();

function listenToSubmit() {
    document.addEventListener("submit", (event) => {
        event.preventDefault()
        const feedbackName = document.getElementById("feedback-name").value
        const feedbackContent = document.getElementById("feedback-content").value

        if (feedbackName === '') {
            alert("Заполните поле имени!")
            return
        }

        if (!feedbackName.match(/^[a-zA-Zа-яА-Я\s]*$/)) {
            alert("Проверьте своё имя, обратитесь в паспортный стол, пускаем только с буквами")
            return
        }

        if (!feedbackContent.match(/^[a-zA-Zа-яА-Я0-9\s!,?\.]*$/)) {
            alert("Разрешены только буквы и цифры!")
            return
        }

        const str = feedbackName + feedbackContent
        let hash = 0,
            i, chr;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = hash + chr * i;
            hash = hash % 12345678
        }
        if (localStorage.getItem(`${hash}`)) {
            alert("Такой отзыв уже был добавлен, проверьте себя, вдруг вы бот ну или просто мискликнули")
            return
        }

        const newObject = {"feedback-name": feedbackName, "feedback-content": feedbackContent}
        localStorage.setItem(hash.toString(), JSON.stringify(newObject))
        addToPage(newObject)
    })
}

function displayFeedbacks() {
    const keys = Object.keys(localStorage)
    let i = keys.length

    while (i--) {
        addToPage(JSON.parse(localStorage.getItem(keys[i])))
    }
}

function addToPage(newObject) {
    const addToHTML = `
      <tr>
          <td class="field-table-feedback">
              ${newObject["feedback-name"].toString()}
          </td>
          <td class="field-table-feedback">
              ${newObject["feedback-content"].toString()}
          </td>
      </tr>
    `;
    document.querySelector(".feedback").insertAdjacentHTML("beforeend", addToHTML);
}