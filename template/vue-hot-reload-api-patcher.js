// TODO: Removed the file once https://github.com/vuejs/vue-hot-reload-api/pull/70 is accepted
module.exports = function (source) {
    return `var window = {};
${source};`;
};
