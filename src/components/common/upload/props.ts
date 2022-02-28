const uploadProps = {
    class: {
        type: String,
    },
    action: {
        type: String,
        default: ""
    },
    limit: {
        type: Number,
        default: 1,
    },
    drag: {
        type: Boolean,
        default: true,
    },
    withCredentials: {
        type: Boolean,
        default: false,
    },
    headers: {
        type: Object,
        default: {}
    },
    data: {
        type: Object,
    },
    name: {
        type: String,
    }
}

export {
    uploadProps
}