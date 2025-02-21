// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App } from "cdktf";
import { AspectTaggingStack } from "./aspect-tagging";
import { AspectValidationStack } from "./aspect-validation";
import { AssetsStack } from "./assets";
import { ConstructsStack } from "./constructs";
import { DataSourcesStack } from "./data-sources";
import { FunctionsStack } from "./functions";
import { HCLInteropStack } from "./hcl-interop";
import { IteratorsStack } from "./iterators";
import { ModulesStack } from "./modules";
import { ProvidersStack } from "./providers";
import {
  CloudBackendStack,
  cloudBackendToCustomBackend,
  localToCloudBackend,
} from "./remote-backends";
import { ResourcesStack } from "./resources";
import {
  crossStackReferencesRunner,
  escapeHatchesRunner,
  multiStackRunner,
  singleStackRunner,
  stackDependenciesRunner,
} from "./stacks";
import { TokensStack } from "./tokens";
import {
  outputsUsageRunner,
  outputVariablesRunner,
  remoteStateRunner,
  VariablesStack,
} from "./variables";

const app = new App();

new AspectTaggingStack(app, "aspect-tagging");
new AspectValidationStack(app, "aspect-validation");
new AssetsStack(app, "assets");
new ConstructsStack(app, "constructs");
new DataSourcesStack(app, "data-sources");
new FunctionsStack(app, "functions");
new HCLInteropStack(app, "hcl-interop");
new IteratorsStack(app, "iterators");
new ModulesStack(app, "modules");
new ProvidersStack(app, "providers");
new CloudBackendStack(app, "remote-backends");
new ResourcesStack(app, "resources");
new TokensStack(app, "tokens", "test-vpc");
new VariablesStack(app, "variables");

app.synth();

// Full synth examples for Backends
localToCloudBackend();
cloudBackendToCustomBackend(localToCloudBackend());

// Full synth examples for Stacks
singleStackRunner();
multiStackRunner();
crossStackReferencesRunner();
stackDependenciesRunner();
escapeHatchesRunner();

// Full synth variable examples
outputVariablesRunner();
outputsUsageRunner();
remoteStateRunner();
