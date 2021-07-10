#import "RCTCheckEmulator.h"

@implementation RCTCheckEmulator

RCT_EXPORT_MODULE(DeviceDetails);

- (BOOL) isEmulator {
    #if TARGET_IPHONE_SIMULATOR
        return YES;
    #else
        return NO;
    #endif
}

RCT_EXPORT_METHOD(isEmulator: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject) {
    resolve(@(self.isEmulator));
}

@end