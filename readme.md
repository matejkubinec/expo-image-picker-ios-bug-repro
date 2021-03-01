# Expo Image Picker - Bug Reproduction

[Issue](https://github.com/expo/expo/issues/10926)

## System Info

device: iPad 2018
os: iPadOS 14.4

## Information

Happens only on iOS/iPadOS, android doesn't have this issue.

## Steps

1. Tap the pick image button
2. Allow permission to access ios library
3. Once the gallery opens, double tap quickly on an image

## Actual

Image is correctly picked but an error is thrown.

## Expected

Image is correctly picked and no error is shown.

## StackTrace

```
Invariant Violation: No callback found with cbID 9638 and callID 4819 for  NativeUnimoduleProxy.callMethod - most likely the callback was already invoked. Args: '[{"height":2048,"uri":"file:///var/mobile/Containers/Data/Application/1385B3E8-D1EB-4C21-889C-C362815D9E84/Library/Caches/E...(truncated)...","type":"image","width":1536,"cancelled":false}]'
- node_modules\react-native\Libraries\LogBox\LogBox.js:148:8 in registerError
- node_modules\react-native\Libraries\LogBox\LogBox.js:59:8 in errorImpl
- node_modules\react-native\Libraries\LogBox\LogBox.js:33:4 in console.error
- node_modules\expo\build\environment\react-native-logs.fx.js:27:4 in error
- node_modules\react-native\Libraries\Core\ExceptionsManager.js:104:6 in reportException
- node_modules\react-native\Libraries\Core\ExceptionsManager.js:171:19 in handleException
- node_modules\react-native\Libraries\Core\setUpErrorHandling.js:24:6 in handleError
- node_modules\expo-error-recovery\build\ErrorRecovery.fx.js:9:32 in ErrorUtils.setGlobalHandler$argument_0
- node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
- node_modules\regenerator-runtime\runtime.js:293:29 in invoke
- node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
- node_modules\regenerator-runtime\runtime.js:154:27 in invoke
- node_modules\regenerator-runtime\runtime.js:164:18 in PromiseImpl.resolve.then$argument_0
- node_modules\react-native\node_modules\promise\setimmediate\core.js:37:13 in tryCallOne
- node_modules\react-native\node_modules\promise\setimmediate\core.js:123:24 in setImmediate$argument_0
- node_modules\react-native\Libraries\Core\Timers\JSTimers.js:130:14 in _callTimer
- node_modules\react-native\Libraries\Core\Timers\JSTimers.js:181:14 in _callImmediatesPass
- node_modules\react-native\Libraries\Core\Timers\JSTimers.js:441:30 in callImmediates
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:387:6 in __callImmediates
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:135:6 in __guard$argument_0
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:134:4 in flushedQueue
* [native code]:null in flushedQueue
* [native code]:null in invokeCallbackAndReturnFlushedQueue
```
