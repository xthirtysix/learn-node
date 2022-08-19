const { Worker } = require('worker_threads');
const { fork } = require('child_process');
const { performance, PerformanceObserver } = require('perf_hooks');
const { readFileSync } = require('fs');

const file = readFileSync('./file.mp4');

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    });
});
performanceObserver.observe({ entryTypes: ['measure'] });

const workerFunction = (array) => {

};

const forkFunction = (array) => {

};

const main = async () => {
    try {

    } catch (e) {
        console.error(e.message);
    }
};

main();
