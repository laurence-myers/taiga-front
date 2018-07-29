const angularModule = {
    directive: () => angularModule,
    constant: () => angularModule,
    controller: () => angularModule,
    factory: () => angularModule,
    filter: () => angularModule,
    run: () => angularModule,
    service: () => angularModule,
    value: () => angularModule,
};

(global as any)['angular'] = {
    module: () => angularModule
};

(global as any)['isTcat'] = true;

// Add any other window globals to stub out here.