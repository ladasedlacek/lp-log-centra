// desktop layout swticher
const layout_switcher = () => {
    const run_switcher = () => {
        const test_layout = document.querySelector('#testLayout')

        document.querySelector('#layout_switch button').addEventListener('click', () => {  
            test_layout.classList.remove('layout-0', 'layout-1')
            document.querySelector('body').classList.add('mobile')
        }),

        document.querySelector('#layout_switch button:nth-child(2)').addEventListener('click', () => {  
            test_layout.classList.remove('layout-1')
            test_layout.classList.add('layout-0')
            test_layout.setAttribute('style', 'width:1035px; margin:0 auto;')
            document.querySelector('body.mobile').classList.remove('mobile')
        }),

        document.querySelector('#layout_switch button:nth-child(3)').addEventListener('click', () => {  
            test_layout.classList.remove('layout-0')
            test_layout.classList.add('layout-1')
            test_layout.setAttribute('style', 'width:1310px; margin:0 auto;')
            document.querySelector('body.mobile').classList.remove('mobile')
        })
    }

    window.location.href.indexOf("127") > -1 ? run_switcher() : 0
}

layout_switcher()
