const toggle = {
    ShowColumn: function ShowColumn() {
        const column = document.querySelector('.column')
        const menu = document.querySelector('.menu')

        if (column && menu) {
            if (column.style.display === 'flex') {
                column.style.display = 'none'
                menu.style.display = 'none'
            } else {
                column.style.display = 'flex'
                menu.style.display = 'none'
            }
        } else {
            return
        }
    },

    ShowHeaders: function ShowHeaders() {
        const menu = document.querySelector('.menu')
        const column = document.querySelector('.column')

        if (column && menu) {
            if (menu.style.display === 'flex') {
                menu.style.display = 'none'
                column.style.display = 'none'
            } else {
                menu.style.display = 'flex'
                column.style.display = 'none'
            }
        } else {
            return
        }
    },

    windowClick: (e) => {
        const target = e.target
        const column = document.querySelector('.column')
        const menu = document.querySelector('.menu')

        if (column && menu) {

            if (window.innerWidth <= 580) {
                if (target.className === 'header' || target.className === 'footer' ||
                    target.id === 'body' || target.className === 'result' ||
                    target.className === 'map' || target.tagName === 'H4' ||
                    target.tagName === 'H5' ||
                    target.className === 'information' ||
                    target.className === 'inf') {
                    column.style.display = 'none'
                    menu.style.display = 'none'
                }
            }
        } else {
            return
        }
    },

    windowResize: () => {
        const column = document.querySelector('.column')
        const menu = document.querySelector('.menu')
        if (column && menu) {

            if (window.innerWidth >= 580) {
                menu.style.display = 'none'
                column.style.display = 'block'
            } else {
                column.style.display = 'none'
            }
        } else {
            return
        }
    }

}

export default toggle
