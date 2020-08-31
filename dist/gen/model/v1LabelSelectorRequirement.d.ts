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
/**
* A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
export declare class V1LabelSelectorRequirement {
    /**
    * key is the label key that the selector applies to.
    */
    'key': string;
    /**
    * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
    */
    'operator': string;
    /**
    * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
