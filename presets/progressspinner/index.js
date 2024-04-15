export default {
    root: {
        class: [
            // Position
            'relative',
            'mx-auto',

            // Sizing
            'w-28',
            'h-28',

            // Flexbox
            'inline-block',

            // Pseudo-Elements
            'before:block',
            'before:pt-full'
        ]
    },
    spinner: {
        class: [
            // Position
            'absolute',
            'top-0',
            'bottom-0',
            'left-0',
            'right-0',
            'm-auto',

            // Sizing
            'w-full',
            'h-full',

            // Transformations
            'transform-none',
            'origin-center',

            // Animations
            'animate-spin'
        ]
    },
    circle: {
        class: [
            // Colors
            'stroke-current',

            // Misc
            'progress-spinner-circle',
        ],
        style: {
            animation: 'p-progress-spinner-dash 1.5s ease-in-out infinite'
        }
    }
};
