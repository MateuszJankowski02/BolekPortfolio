import { ref } from '#imports';

export function useScrollTo() {
    const sectionTransition = ref(false);
    const backToTopTransition = ref(false);

    const myScrollTo = (element, behavior) => {
        document.body.style.pointerEvents = 'none';

        behavior === 'instant' ? sectionTransition.value = true : sectionTransition.value = false;

        if (behavior === 'instant'){
            setTimeout(() => {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: behavior
                });
                sectionTransition.value = false;

                document.body.style.pointerEvents = 'auto';
            }, 500);
            return;
        }

        if (backToTopTransition.value === true){
            return;
        }
        backToTopTransition.value = true;
        window.scrollTo({
            top: element.offsetTop,
            behavior: behavior
        });
        setTimeout(() => {
            backToTopTransition.value = false;

            document.body.style.pointerEvents = 'auto';
        }, 100)
    }

    return { myScrollTo, sectionTransition, backToTopTransition };
}