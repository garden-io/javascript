"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1beta1EndpointPort = void 0;
/**
* EndpointPort represents a Port used by an EndpointSlice
*/
class V1beta1EndpointPort {
    static getAttributeTypeMap() {
        return V1beta1EndpointPort.attributeTypeMap;
    }
}
exports.V1beta1EndpointPort = V1beta1EndpointPort;
V1beta1EndpointPort.discriminator = undefined;
V1beta1EndpointPort.attributeTypeMap = [
    {
        "name": "appProtocol",
        "baseName": "appProtocol",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    },
    {
        "name": "protocol",
        "baseName": "protocol",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1EndpointPort.js.map