"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cp = void 0;
const tslib_1 = require("tslib");
const fs = require("fs");
const stream_buffers_1 = require("stream-buffers");
const tar = require("tar");
const tmp = require("tmp-promise");
const exec_1 = require("./exec");
class Cp {
    constructor(config, execInstance) {
        this.execInstance = execInstance || new exec_1.Exec(config);
    }
    /**
     * @param {string} namespace - The namespace of the pod to exec the command inside.
     * @param {string} podName - The name of the pod to exec the command inside.
     * @param {string} containerName - The name of the container in the pod to exec the command inside.
     * @param {string} srcPath - The source path in the pod
     * @param {string} tgtPath - The target path in local
     */
    cpFromPod(namespace, podName, containerName, srcPath, tgtPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tmpFile = tmp.fileSync();
            const tmpFileName = tmpFile.name;
            const command = ['tar', 'cf', '-', srcPath];
            const writerStream = fs.createWriteStream(tmpFileName);
            const errStream = new stream_buffers_1.WritableStreamBuffer();
            this.execInstance.exec(namespace, podName, containerName, command, writerStream, errStream, null, false, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (errStream.size()) {
                    throw new Error(`Error from cpFromPod - details: \n ${errStream.getContentsAsString()}`);
                }
                yield tar.x({
                    file: tmpFileName,
                    cwd: tgtPath,
                });
            }));
        });
    }
    /**
     * @param {string} namespace - The namespace of the pod to exec the command inside.
     * @param {string} podName - The name of the pod to exec the command inside.
     * @param {string} containerName - The name of the container in the pod to exec the command inside.
     * @param {string} srcPath - The source path in local
     * @param {string} tgtPath - The target path in the pod
     */
    cpToPod(namespace, podName, containerName, srcPath, tgtPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tmpFile = tmp.fileSync();
            const tmpFileName = tmpFile.name;
            const command = ['tar', 'xf', '-', '-C', tgtPath];
            yield tar.c({
                file: tmpFile.name,
            }, [srcPath]);
            const readStream = fs.createReadStream(tmpFileName);
            const errStream = new stream_buffers_1.WritableStreamBuffer();
            this.execInstance.exec(namespace, podName, containerName, command, null, errStream, readStream, false, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (errStream.size()) {
                    throw new Error(`Error from cpToPod - details: \n ${errStream.getContentsAsString()}`);
                }
            }));
        });
    }
}
exports.Cp = Cp;
//# sourceMappingURL=cp.js.map