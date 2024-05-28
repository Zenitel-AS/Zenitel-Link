# Zenitel Link

 **Zenitel Link** is composed of two different interfaces: 

1. REST interface for requesting information, and initiating call or device operations.
2. WAMP (wamp-proto.org) interface that offer the same, but also event subscription to system events in addition.


Most of the REST operations will result in one or more system events through the WAMP interface. There are events published at changes in call progress, call queue changes, door opened etc.
Please see section **Events** and **Trace** buttons below for event defintions. It is possible to poll information using the REST it is way more efficient to subscribe to the WAMP events. 
The REST interface is a wrapper for the WAMP interface, hence, every REST operation has a WAMP counterpart which can be used directly.


Visit Github Pages for the interactive OpenAPI specification: https://zenitel-as.github.io/Zenitel-Link/
