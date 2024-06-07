if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const items = new ListItems(document.getElementById('list-items'));
    const items_mysql = new ListItems(document.getElementById('list-items-mysql'));


    items.init();
    items_mysql.init();

    function ListItems(el) {
        this.el = el;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]');

                if (open != undefined)
                    open.addEventListener('click', () => this.toggleItems(parent) );
            })
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }
    }

}