import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_platform-browser.js?v=10dbc928";

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { provideRouter } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_router.js?v=10dbc928";

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

// src/app/app.ts
import { Component as Component8 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule8 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import { Validators, ReactiveFormsModule as ReactiveFormsModule5 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
import { Subject, takeUntil } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/rxjs.js?v=10dbc928";

// src/app/components/shared/alert/alert.component.ts
import { Component, Input } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i0 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i1 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div")(1, "strong");
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275classMap("alert alert-" + ctx_r0.type);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", ctx_r0.type === "error" ? "Error" : "Success", ":");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate1(" ", ctx_r0.message, "\n");
  }
}
var AlertComponent = class _AlertComponent {
  message = null;
  type = "error";
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], inputs: { message: "message", type: "type" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"]], template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275template(0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    }
    if (rf & 2) {
      i0.\u0275\u0275property("ngIf", ctx.message);
    }
  }, dependencies: [CommonModule, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", standalone: true, imports: [CommonModule], template: `<div *ngIf="message" [class]="'alert alert-' + type">\r
  <strong>{{ type === 'error' ? 'Error' : 'Success' }}:</strong> {{ message }}\r
</div>`, styles: ["/* src/app/components/shared/alert/alert.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=alert.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], type: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/components/shared/alert/alert.component.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fshared%2Falert%2Falert.component.ts%40AlertComponent";
  function AlertComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(AlertComponent, m.default, [i0, i1], [CommonModule, Component, Input], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AlertComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AlertComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/shared/loading-spinner/loading-spinner.component.ts
import { Component as Component2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i02 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i12 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  static \u0275fac = function LoadingSpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingSpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 3, vars: 0, consts: [[1, "loading-spinner"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "p");
      i02.\u0275\u0275text(2, "Loading report data...");
      i02.\u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule2, i12.NgClass, i12.NgComponentOutlet, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.NgStyle, i12.NgSwitch, i12.NgSwitchCase, i12.NgSwitchDefault, i12.NgPlural, i12.NgPluralCase, i12.AsyncPipe, i12.UpperCasePipe, i12.LowerCasePipe, i12.JsonPipe, i12.SlicePipe, i12.DecimalPipe, i12.PercentPipe, i12.TitleCasePipe, i12.CurrencyPipe, i12.DatePipe, i12.I18nPluralPipe, i12.I18nSelectPipe, i12.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=loading-spinner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(LoadingSpinnerComponent, [{
    type: Component2,
    args: [{ selector: "app-loading-spinner", standalone: true, imports: [CommonModule2], template: '<div class="loading-spinner">\r\n  <p>Loading report data...</p>\r\n</div>', styles: ["/* src/app/components/shared/loading-spinner/loading-spinner.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=loading-spinner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "src/app/components/shared/loading-spinner/loading-spinner.component.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fshared%2Floading-spinner%2Floading-spinner.component.ts%40LoadingSpinnerComponent";
  function LoadingSpinnerComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(LoadingSpinnerComponent, m.default, [i02, i12], [CommonModule2, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LoadingSpinnerComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoadingSpinnerComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/shared/json-display/json-display.component.ts
import { Component as Component3, Input as Input2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i03 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i13 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
function JsonDisplayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div")(1, "h4", 1);
    i03.\u0275\u0275text(2);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "pre", 2);
    i03.\u0275\u0275text(4);
    i03.\u0275\u0275pipe(5, "json");
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275classMap("json-display" + (ctx_r0.isSuccess ? " success" : " error"));
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(ctx_r0.title);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(i03.\u0275\u0275pipeBind1(5, 4, ctx_r0.data));
  }
}
var JsonDisplayComponent = class _JsonDisplayComponent {
  data = null;
  title = "Data";
  isSuccess = false;
  static \u0275fac = function JsonDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JsonDisplayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _JsonDisplayComponent, selectors: [["app-json-display"]], inputs: { data: "data", title: "title", isSuccess: "isSuccess" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "json-title"], [1, "json-content"]], template: function JsonDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275template(0, JsonDisplayComponent_div_0_Template, 6, 6, "div", 0);
    }
    if (rf & 2) {
      i03.\u0275\u0275property("ngIf", ctx.data);
    }
  }, dependencies: [CommonModule3, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgStyle, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.NgPlural, i13.NgPluralCase, i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=json-display.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(JsonDisplayComponent, [{
    type: Component3,
    args: [{ selector: "app-json-display", standalone: true, imports: [CommonModule3], template: `<div *ngIf="data" [class]="'json-display' + (isSuccess ? ' success' : ' error')">\r
  <h4 class="json-title">{{ title }}</h4>\r
  <pre class="json-content">{{ data | json }}</pre>\r
</div>`, styles: ["/* src/app/components/shared/json-display/json-display.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=json-display.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input2
  }], title: [{
    type: Input2
  }], isSuccess: [{
    type: Input2
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(JsonDisplayComponent, { className: "JsonDisplayComponent", filePath: "src/app/components/shared/json-display/json-display.component.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fshared%2Fjson-display%2Fjson-display.component.ts%40JsonDisplayComponent";
  function JsonDisplayComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(JsonDisplayComponent, m.default, [i03, i13], [CommonModule3, Component3, Input2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && JsonDisplayComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && JsonDisplayComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/form/basic-info/basic-info.component.ts
import { Component as Component4, Input as Input3 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule4 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import { ReactiveFormsModule } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
import * as i04 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i14 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i2 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
function BasicInfoComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "option", 13);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r1 = ctx.$implicit;
    i04.\u0275\u0275property("value", name_r1);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate1(" ", name_r1, " ");
  }
}
function BasicInfoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 14);
    i04.\u0275\u0275text(1, " Report Name is required ");
    i04.\u0275\u0275elementEnd();
  }
}
function BasicInfoComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 14);
    i04.\u0275\u0275text(1, " Job Name is required (minimum 3 characters) ");
    i04.\u0275\u0275elementEnd();
  }
}
var BasicInfoComponent = class _BasicInfoComponent {
  form;
  reportNames = [];
  isFieldInvalid(fieldName) {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  static \u0275fac = function BasicInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _BasicInfoComponent, selectors: [["app-basic-info"]], inputs: { form: "form", reportNames: "reportNames" }, decls: 24, vars: 3, consts: [[1, "card"], [1, "card-title"], [1, "form-group"], ["for", "reportName", 1, "form-label"], [1, "required"], ["id", "reportName", "formControlName", "reportName", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-text", 4, "ngIf"], ["for", "jobName", 1, "form-label"], ["id", "jobName", "type", "text", "formControlName", "jobName", "placeholder", "Enter job name", 1, "form-control"], ["for", "outputName", 1, "form-label"], ["id", "outputName", "type", "text", "formControlName", "outputName", "placeholder", "/Test/test_output.DOI", 1, "form-control"], [3, "value"], [1, "error-text"]], template: function BasicInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      i04.\u0275\u0275text(2, "Basic Information");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(3, "div", 2)(4, "label", 3);
      i04.\u0275\u0275text(5, " Report Name ");
      i04.\u0275\u0275elementStart(6, "span", 4);
      i04.\u0275\u0275text(7, "*");
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(8, "select", 5)(9, "option", 6);
      i04.\u0275\u0275text(10, "Select Report");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(11, BasicInfoComponent_option_11_Template, 2, 2, "option", 7);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(12, BasicInfoComponent_div_12_Template, 2, 0, "div", 8);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(13, "div", 2)(14, "label", 9);
      i04.\u0275\u0275text(15, " Job Name ");
      i04.\u0275\u0275elementStart(16, "span", 4);
      i04.\u0275\u0275text(17, "*");
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275element(18, "input", 10);
      i04.\u0275\u0275template(19, BasicInfoComponent_div_19_Template, 2, 0, "div", 8);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(20, "div", 2)(21, "label", 11);
      i04.\u0275\u0275text(22, "Output Name");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275element(23, "input", 12);
      i04.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(11);
      i04.\u0275\u0275property("ngForOf", ctx.reportNames);
      i04.\u0275\u0275advance();
      i04.\u0275\u0275property("ngIf", ctx.isFieldInvalid("reportName"));
      i04.\u0275\u0275advance(7);
      i04.\u0275\u0275property("ngIf", ctx.isFieldInvalid("jobName"));
    }
  }, dependencies: [CommonModule4, i14.NgClass, i14.NgComponentOutlet, i14.NgForOf, i14.NgIf, i14.NgTemplateOutlet, i14.NgStyle, i14.NgSwitch, i14.NgSwitchCase, i14.NgSwitchDefault, i14.NgPlural, i14.NgPluralCase, ReactiveFormsModule, i2.\u0275NgNoValidate, i2.NgSelectOption, i2.\u0275NgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.MinValidator, i2.MaxValidator, i2.FormControlDirective, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i14.AsyncPipe, i14.UpperCasePipe, i14.LowerCasePipe, i14.JsonPipe, i14.SlicePipe, i14.DecimalPipe, i14.PercentPipe, i14.TitleCasePipe, i14.CurrencyPipe, i14.DatePipe, i14.I18nPluralPipe, i14.I18nSelectPipe, i14.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=basic-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(BasicInfoComponent, [{
    type: Component4,
    args: [{ selector: "app-basic-info", standalone: true, imports: [CommonModule4, ReactiveFormsModule], template: `<div class="card">\r
  <h3 class="card-title">Basic Information</h3>\r
  \r
  <div class="form-group">\r
    <label for="reportName" class="form-label">\r
      Report Name <span class="required">*</span>\r
    </label>\r
    <select id="reportName" formControlName="reportName" class="form-control">\r
      <option value="">Select Report</option>\r
      <option *ngFor="let name of reportNames" [value]="name">\r
        {{ name }}\r
      </option>\r
    </select>\r
    <div *ngIf="isFieldInvalid('reportName')" class="error-text">\r
      Report Name is required\r
    </div>\r
  </div>\r
\r
  <div class="form-group">\r
    <label for="jobName" class="form-label">\r
      Job Name <span class="required">*</span>\r
    </label>\r
    <input \r
      id="jobName" \r
      type="text" \r
      formControlName="jobName" \r
      class="form-control" \r
      placeholder="Enter job name" \r
    />\r
    <div *ngIf="isFieldInvalid('jobName')" class="error-text">\r
      Job Name is required (minimum 3 characters)\r
    </div>\r
  </div>\r
\r
  <div class="form-group">\r
    <label for="outputName" class="form-label">Output Name</label>\r
    <input \r
      id="outputName" \r
      type="text" \r
      formControlName="outputName" \r
      class="form-control" \r
      placeholder="/Test/test_output.DOI" \r
    />\r
  </div>\r
</div>`, styles: ["/* src/app/components/form/basic-info/basic-info.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=basic-info.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input3
  }], reportNames: [{
    type: Input3
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(BasicInfoComponent, { className: "BasicInfoComponent", filePath: "src/app/components/form/basic-info/basic-info.component.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fform%2Fbasic-info%2Fbasic-info.component.ts%40BasicInfoComponent";
  function BasicInfoComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(BasicInfoComponent, m.default, [i04, i14, i2], [CommonModule4, ReactiveFormsModule, Component4, Input3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && BasicInfoComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BasicInfoComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/form/report-columns/report-columns.component.ts
import { Component as Component5, Input as Input4, Output, EventEmitter } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule5 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import { ReactiveFormsModule as ReactiveFormsModule2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
import * as i05 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i15 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i22 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
function ReportColumnsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 7);
    i05.\u0275\u0275text(1, " Please select a report first to see available columns ");
    i05.\u0275\u0275elementEnd();
  }
}
function ReportColumnsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "div", 8)(1, "label", 9)(2, "input", 10);
    i05.\u0275\u0275listener("change", function ReportColumnsComponent_div_7_Template_input_change_2_listener($event) {
      const col_r2 = i05.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.onColumnToggle(col_r2, $event));
    });
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "span", 11);
    i05.\u0275\u0275text(4);
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("checked", ctx_r2.isColumnSelected(col_r2));
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(col_r2);
  }
}
function ReportColumnsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 12);
    i05.\u0275\u0275text(1, " Please select at least one column ");
    i05.\u0275\u0275elementEnd();
  }
}
var ReportColumnsComponent = class _ReportColumnsComponent {
  columnsList = [];
  reportColumns;
  form;
  columnToggled = new EventEmitter();
  get isFormInvalid() {
    const field = this.form.get("reportColumns");
    return !!(field && field.invalid && field.touched);
  }
  isColumnSelected(column) {
    return this.reportColumns.value.includes(column);
  }
  onColumnToggle(column, event) {
    this.columnToggled.emit({ column, event });
  }
  static \u0275fac = function ReportColumnsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportColumnsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _ReportColumnsComponent, selectors: [["app-report-columns"]], inputs: { columnsList: "columnsList", reportColumns: "reportColumns", form: "form" }, outputs: { columnToggled: "columnToggled" }, decls: 9, vars: 5, consts: [[1, "card"], [1, "card-title"], [1, "required"], [1, "checkbox-container"], ["class", "empty-state", 4, "ngIf"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], ["class", "error-text", 4, "ngIf"], [1, "empty-state"], [1, "checkbox-item"], [1, "checkbox-label"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "checked"], [1, "checkbox-text"], [1, "error-text"]], template: function ReportColumnsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      i05.\u0275\u0275text(2, " Report Columns ");
      i05.\u0275\u0275elementStart(3, "span", 2);
      i05.\u0275\u0275text(4, "*");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(5, "div", 3);
      i05.\u0275\u0275template(6, ReportColumnsComponent_div_6_Template, 2, 0, "div", 4)(7, ReportColumnsComponent_div_7_Template, 5, 2, "div", 5);
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275template(8, ReportColumnsComponent_div_8_Template, 2, 0, "div", 6);
      i05.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(5);
      i05.\u0275\u0275classProp("invalid", ctx.isFormInvalid);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.columnsList.length === 0);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngForOf", ctx.columnsList);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.isFormInvalid);
    }
  }, dependencies: [CommonModule5, i15.NgClass, i15.NgComponentOutlet, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i15.NgStyle, i15.NgSwitch, i15.NgSwitchCase, i15.NgSwitchDefault, i15.NgPlural, i15.NgPluralCase, ReactiveFormsModule2, i22.\u0275NgNoValidate, i22.NgSelectOption, i22.\u0275NgSelectMultipleOption, i22.DefaultValueAccessor, i22.NumberValueAccessor, i22.RangeValueAccessor, i22.CheckboxControlValueAccessor, i22.SelectControlValueAccessor, i22.SelectMultipleControlValueAccessor, i22.RadioControlValueAccessor, i22.NgControlStatus, i22.NgControlStatusGroup, i22.RequiredValidator, i22.MinLengthValidator, i22.MaxLengthValidator, i22.PatternValidator, i22.CheckboxRequiredValidator, i22.EmailValidator, i22.MinValidator, i22.MaxValidator, i22.FormControlDirective, i22.FormGroupDirective, i22.FormControlName, i22.FormGroupName, i22.FormArrayName, i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=report-columns.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(ReportColumnsComponent, [{
    type: Component5,
    args: [{ selector: "app-report-columns", standalone: true, imports: [CommonModule5, ReactiveFormsModule2], template: '<div class="card">\r\n  <h3 class="card-title">\r\n    Report Columns <span class="required">*</span>\r\n  </h3>\r\n  \r\n  <div \r\n    class="checkbox-container" \r\n    [class.invalid]="isFormInvalid"\r\n  >\r\n    <div *ngIf="columnsList.length === 0" class="empty-state">\r\n      Please select a report first to see available columns\r\n    </div>\r\n    <div class="checkbox-item" *ngFor="let col of columnsList">\r\n      <label class="checkbox-label">\r\n        <input \r\n          type="checkbox"\r\n          [checked]="isColumnSelected(col)"\r\n          (change)="onColumnToggle(col, $event)"\r\n          class="checkbox-input" \r\n        />\r\n        <span class="checkbox-text">{{ col }}</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div *ngIf="isFormInvalid" class="error-text">\r\n    Please select at least one column\r\n  </div>\r\n</div>', styles: ["/* src/app/components/form/report-columns/report-columns.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=report-columns.component.css.map */\n"] }]
  }], null, { columnsList: [{
    type: Input4
  }], reportColumns: [{
    type: Input4
  }], form: [{
    type: Input4
  }], columnToggled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(ReportColumnsComponent, { className: "ReportColumnsComponent", filePath: "src/app/components/form/report-columns/report-columns.component.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fform%2Freport-columns%2Freport-columns.component.ts%40ReportColumnsComponent";
  function ReportColumnsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(ReportColumnsComponent, m.default, [i05, i15, i22], [CommonModule5, ReactiveFormsModule2, Component5, Input4, Output], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ReportColumnsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ReportColumnsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/form/parameters/parameters.component.ts
import { Component as Component6, Input as Input5 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule6 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import { ReactiveFormsModule as ReactiveFormsModule3 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
import * as i06 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i16 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i23 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
function ParametersComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 5)(1, "label", 6);
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(3, "input", 7);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("for", "param_" + field_r1.parameter);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", field_r1.parameter, " ");
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("id", "param_" + field_r1.parameter)("formControlName", field_r1.parameter);
  }
}
function ParametersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    i06.\u0275\u0275text(2, "Parameters");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(3, "div", 3);
    i06.\u0275\u0275template(4, ParametersComponent_div_0_div_4_Template, 4, 4, "div", 4);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("formGroup", ctx_r1.parametersGroup);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngForOf", ctx_r1.parameterFields);
  }
}
var ParametersComponent = class _ParametersComponent {
  parameterFields = [];
  parametersGroup;
  static \u0275fac = function ParametersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _ParametersComponent, selectors: [["app-parameters"]], inputs: { parameterFields: "parameterFields", parametersGroup: "parametersGroup" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-title"], [1, "parameters-grid", 3, "formGroup"], ["class", "param-field", 4, "ngFor", "ngForOf"], [1, "param-field"], [1, "param-label", 3, "for"], ["type", "text", 1, "param-input", 3, "id", "formControlName"]], template: function ParametersComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275template(0, ParametersComponent_div_0_Template, 5, 2, "div", 0);
    }
    if (rf & 2) {
      i06.\u0275\u0275property("ngIf", ctx.parameterFields.length > 0);
    }
  }, dependencies: [CommonModule6, i16.NgClass, i16.NgComponentOutlet, i16.NgForOf, i16.NgIf, i16.NgTemplateOutlet, i16.NgStyle, i16.NgSwitch, i16.NgSwitchCase, i16.NgSwitchDefault, i16.NgPlural, i16.NgPluralCase, ReactiveFormsModule3, i23.\u0275NgNoValidate, i23.NgSelectOption, i23.\u0275NgSelectMultipleOption, i23.DefaultValueAccessor, i23.NumberValueAccessor, i23.RangeValueAccessor, i23.CheckboxControlValueAccessor, i23.SelectControlValueAccessor, i23.SelectMultipleControlValueAccessor, i23.RadioControlValueAccessor, i23.NgControlStatus, i23.NgControlStatusGroup, i23.RequiredValidator, i23.MinLengthValidator, i23.MaxLengthValidator, i23.PatternValidator, i23.CheckboxRequiredValidator, i23.EmailValidator, i23.MinValidator, i23.MaxValidator, i23.FormControlDirective, i23.FormGroupDirective, i23.FormControlName, i23.FormGroupName, i23.FormArrayName, i16.AsyncPipe, i16.UpperCasePipe, i16.LowerCasePipe, i16.JsonPipe, i16.SlicePipe, i16.DecimalPipe, i16.PercentPipe, i16.TitleCasePipe, i16.CurrencyPipe, i16.DatePipe, i16.I18nPluralPipe, i16.I18nSelectPipe, i16.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=parameters.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(ParametersComponent, [{
    type: Component6,
    args: [{ selector: "app-parameters", standalone: true, imports: [CommonModule6, ReactiveFormsModule3], template: `<div class="card" *ngIf="parameterFields.length > 0">\r
  <h3 class="card-title">Parameters</h3>\r
  <div class="parameters-grid" [formGroup]="parametersGroup">\r
    <div class="param-field" *ngFor="let field of parameterFields">\r
      <label [for]="'param_' + field.parameter" class="param-label">\r
        {{ field.parameter }}\r
      </label>\r
      <input \r
        [id]="'param_' + field.parameter"\r
        type="text"\r
        [formControlName]="field.parameter"\r
        class="param-input" \r
      />\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/components/form/parameters/parameters.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=parameters.component.css.map */\n"] }]
  }], null, { parameterFields: [{
    type: Input5
  }], parametersGroup: [{
    type: Input5
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(ParametersComponent, { className: "ParametersComponent", filePath: "src/app/components/form/parameters/parameters.component.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fform%2Fparameters%2Fparameters.component.ts%40ParametersComponent";
  function ParametersComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(ParametersComponent, m.default, [i06, i16, i23], [CommonModule6, ReactiveFormsModule3, Component6, Input5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ParametersComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ParametersComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/form/schedule-info/schedule-info.component.ts
import { Component as Component7, Input as Input6, Output as Output2, EventEmitter as EventEmitter2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { CommonModule as CommonModule7 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import { ReactiveFormsModule as ReactiveFormsModule4 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
import * as i07 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i17 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
import * as i24 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";
function ScheduleInfoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Schedule Type is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Run On Date is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementContainerStart(0);
    i07.\u0275\u0275elementStart(1, "div", 2)(2, "label", 16);
    i07.\u0275\u0275text(3, " Run On Date (yyyy-MM-dd) ");
    i07.\u0275\u0275elementStart(4, "span", 4);
    i07.\u0275\u0275text(5, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(6, "input", 17);
    i07.\u0275\u0275template(7, ScheduleInfoComponent_ng_container_18_div_7_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("runOnDate"));
  }
}
function ScheduleInfoComponent_ng_container_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Time is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementContainerStart(0);
    i07.\u0275\u0275elementStart(1, "div", 2)(2, "label", 18);
    i07.\u0275\u0275text(3, " Once A Day (HH:mm:ss) ");
    i07.\u0275\u0275elementStart(4, "span", 4);
    i07.\u0275\u0275text(5, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(6, "input", 19);
    i07.\u0275\u0275template(7, ScheduleInfoComponent_ng_container_19_div_7_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("onceADay"));
  }
}
function ScheduleInfoComponent_ng_container_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Valid number between 1 and 365 is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Start Date is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_20_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " End Date is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementContainerStart(0);
    i07.\u0275\u0275elementStart(1, "div", 2)(2, "label", 20);
    i07.\u0275\u0275text(3, " Frequency in Days ");
    i07.\u0275\u0275elementStart(4, "span", 4);
    i07.\u0275\u0275text(5, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(6, "input", 21);
    i07.\u0275\u0275template(7, ScheduleInfoComponent_ng_container_20_div_7_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(8, "div", 2)(9, "label", 22);
    i07.\u0275\u0275text(10, " Schedule Start Date ");
    i07.\u0275\u0275elementStart(11, "span", 4);
    i07.\u0275\u0275text(12, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(13, "input", 23);
    i07.\u0275\u0275template(14, ScheduleInfoComponent_ng_container_20_div_14_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(15, "div", 2)(16, "label", 24);
    i07.\u0275\u0275text(17, " Schedule End Date ");
    i07.\u0275\u0275elementStart(18, "span", 4);
    i07.\u0275\u0275text(19, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(20, "input", 25);
    i07.\u0275\u0275template(21, ScheduleInfoComponent_ng_container_20_div_21_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("frequencyInDays"));
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("scheduleStartDate"));
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("scheduleEndDate"));
  }
}
function ScheduleInfoComponent_ng_container_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Start Time is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " End Time is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 15);
    i07.\u0275\u0275text(1, " Valid number between 1 and 3600 is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementContainerStart(0);
    i07.\u0275\u0275elementStart(1, "div", 2)(2, "label", 26);
    i07.\u0275\u0275text(3, " Repeat Start Time (HH:mm:ss) ");
    i07.\u0275\u0275elementStart(4, "span", 4);
    i07.\u0275\u0275text(5, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(6, "input", 27);
    i07.\u0275\u0275template(7, ScheduleInfoComponent_ng_container_21_div_7_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(8, "div", 2)(9, "label", 28);
    i07.\u0275\u0275text(10, " Repeat End Time (HH:mm:ss) ");
    i07.\u0275\u0275elementStart(11, "span", 4);
    i07.\u0275\u0275text(12, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(13, "input", 29);
    i07.\u0275\u0275template(14, ScheduleInfoComponent_ng_container_21_div_14_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(15, "div", 2)(16, "label", 30);
    i07.\u0275\u0275text(17, " Interval in Seconds ");
    i07.\u0275\u0275elementStart(18, "span", 4);
    i07.\u0275\u0275text(19, "*");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275element(20, "input", 31);
    i07.\u0275\u0275template(21, ScheduleInfoComponent_ng_container_21_div_21_Template, 2, 0, "div", 10);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("repeatStartTime"));
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("repeatEndTime"));
    i07.\u0275\u0275advance(7);
    i07.\u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("intervalInSeconds"));
  }
}
function ScheduleInfoComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "span");
    i07.\u0275\u0275text(1, "Confirm Schedule");
    i07.\u0275\u0275elementEnd();
  }
}
function ScheduleInfoComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "span");
    i07.\u0275\u0275text(1, "Scheduling...");
    i07.\u0275\u0275elementEnd();
  }
}
var ScheduleInfoComponent = class _ScheduleInfoComponent {
  form;
  isSubmitting = false;
  submitted = new EventEmitter2();
  cancelled = new EventEmitter2();
  get scheduleType() {
    return this.form.get("scheduleType")?.value || "";
  }
  isFieldInvalid(fieldName) {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  onSubmit() {
    this.submitted.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  static \u0275fac = function ScheduleInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _ScheduleInfoComponent, selectors: [["app-schedule-info"]], inputs: { form: "form", isSubmitting: "isSubmitting" }, outputs: { submitted: "submitted", cancelled: "cancelled" }, decls: 28, vars: 9, consts: [[1, "card"], [1, "card-title"], [1, "form-group"], ["for", "scheduleType", 1, "form-label"], [1, "required"], ["id", "scheduleType", "formControlName", "scheduleType", 1, "form-control"], ["value", ""], ["value", "One Time"], ["value", "Daily"], ["value", "Repeat Window"], ["class", "error-text", 4, "ngIf"], [4, "ngIf"], [1, "button-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "error-text"], ["for", "runOnDate", 1, "form-label"], ["id", "runOnDate", "type", "date", "formControlName", "runOnDate", 1, "form-control"], ["for", "onceADay", 1, "form-label"], ["id", "onceADay", "type", "time", "formControlName", "onceADay", "step", "1", 1, "form-control"], ["for", "frequencyInDays", 1, "form-label"], ["id", "frequencyInDays", "type", "number", "formControlName", "frequencyInDays", "min", "1", "max", "365", 1, "form-control"], ["for", "scheduleStartDate", 1, "form-label"], ["id", "scheduleStartDate", "type", "date", "formControlName", "scheduleStartDate", 1, "form-control"], ["for", "scheduleEndDate", 1, "form-label"], ["id", "scheduleEndDate", "type", "date", "formControlName", "scheduleEndDate", 1, "form-control"], ["for", "repeatStartTime", 1, "form-label"], ["id", "repeatStartTime", "type", "time", "formControlName", "repeatStartTime", "step", "1", 1, "form-control"], ["for", "repeatEndTime", 1, "form-label"], ["id", "repeatEndTime", "type", "time", "formControlName", "repeatEndTime", "step", "1", 1, "form-control"], ["for", "intervalInSeconds", 1, "form-label"], ["id", "intervalInSeconds", "type", "number", "formControlName", "intervalInSeconds", "min", "1", "max", "3600", 1, "form-control"]], template: function ScheduleInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i07.\u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      i07.\u0275\u0275text(2, "Schedule Information");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(3, "div", 2)(4, "label", 3);
      i07.\u0275\u0275text(5, " Schedule Type ");
      i07.\u0275\u0275elementStart(6, "span", 4);
      i07.\u0275\u0275text(7, "*");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(8, "select", 5)(9, "option", 6);
      i07.\u0275\u0275text(10, "Select Type");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(11, "option", 7);
      i07.\u0275\u0275text(12, "One Time");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(13, "option", 8);
      i07.\u0275\u0275text(14, "Daily");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(15, "option", 9);
      i07.\u0275\u0275text(16, "Repeat Window");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275template(17, ScheduleInfoComponent_div_17_Template, 2, 0, "div", 10);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275template(18, ScheduleInfoComponent_ng_container_18_Template, 8, 1, "ng-container", 11)(19, ScheduleInfoComponent_ng_container_19_Template, 8, 1, "ng-container", 11)(20, ScheduleInfoComponent_ng_container_20_Template, 22, 3, "ng-container", 11)(21, ScheduleInfoComponent_ng_container_21_Template, 22, 3, "ng-container", 11);
      i07.\u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
      i07.\u0275\u0275listener("click", function ScheduleInfoComponent_Template_button_click_23_listener() {
        return ctx.onSubmit();
      });
      i07.\u0275\u0275template(24, ScheduleInfoComponent_span_24_Template, 2, 0, "span", 11)(25, ScheduleInfoComponent_span_25_Template, 2, 0, "span", 11);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(26, "button", 14);
      i07.\u0275\u0275listener("click", function ScheduleInfoComponent_Template_button_click_26_listener() {
        return ctx.onCancel();
      });
      i07.\u0275\u0275text(27, " Cancel ");
      i07.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i07.\u0275\u0275advance(17);
      i07.\u0275\u0275property("ngIf", ctx.isFieldInvalid("scheduleType"));
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.scheduleType === "One Time" || ctx.scheduleType === "Repeat Window");
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.scheduleType === "One Time" || ctx.scheduleType === "Daily");
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.scheduleType === "Daily");
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.scheduleType === "Repeat Window");
      i07.\u0275\u0275advance(2);
      i07.\u0275\u0275property("disabled", ctx.isSubmitting || ctx.form.invalid);
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", !ctx.isSubmitting);
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.isSubmitting);
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("disabled", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule7, i17.NgClass, i17.NgComponentOutlet, i17.NgForOf, i17.NgIf, i17.NgTemplateOutlet, i17.NgStyle, i17.NgSwitch, i17.NgSwitchCase, i17.NgSwitchDefault, i17.NgPlural, i17.NgPluralCase, ReactiveFormsModule4, i24.\u0275NgNoValidate, i24.NgSelectOption, i24.\u0275NgSelectMultipleOption, i24.DefaultValueAccessor, i24.NumberValueAccessor, i24.RangeValueAccessor, i24.CheckboxControlValueAccessor, i24.SelectControlValueAccessor, i24.SelectMultipleControlValueAccessor, i24.RadioControlValueAccessor, i24.NgControlStatus, i24.NgControlStatusGroup, i24.RequiredValidator, i24.MinLengthValidator, i24.MaxLengthValidator, i24.PatternValidator, i24.CheckboxRequiredValidator, i24.EmailValidator, i24.MinValidator, i24.MaxValidator, i24.FormControlDirective, i24.FormGroupDirective, i24.FormControlName, i24.FormGroupName, i24.FormArrayName, i17.AsyncPipe, i17.UpperCasePipe, i17.LowerCasePipe, i17.JsonPipe, i17.SlicePipe, i17.DecimalPipe, i17.PercentPipe, i17.TitleCasePipe, i17.CurrencyPipe, i17.DatePipe, i17.I18nPluralPipe, i17.I18nSelectPipe, i17.KeyValuePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=schedule-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(ScheduleInfoComponent, [{
    type: Component7,
    args: [{ selector: "app-schedule-info", standalone: true, imports: [CommonModule7, ReactiveFormsModule4], template: `<div class="card">\r
  <h3 class="card-title">Schedule Information</h3>\r
\r
  <div class="form-group">\r
    <label for="scheduleType" class="form-label">\r
      Schedule Type <span class="required">*</span>\r
    </label>\r
    <select \r
      id="scheduleType" \r
      formControlName="scheduleType" \r
      class="form-control"\r
    >\r
      <option value="">Select Type</option>\r
      <option value="One Time">One Time</option>\r
      <option value="Daily">Daily</option>\r
      <option value="Repeat Window">Repeat Window</option>\r
    </select>\r
    <div *ngIf="isFieldInvalid('scheduleType')" class="error-text">\r
      Schedule Type is required\r
    </div>\r
  </div>\r
\r
  <ng-container *ngIf="scheduleType === 'One Time' || scheduleType === 'Repeat Window'">\r
    <div class="form-group">\r
      <label for="runOnDate" class="form-label">\r
        Run On Date (yyyy-MM-dd) <span class="required">*</span>\r
      </label>\r
      <input \r
        id="runOnDate" \r
        type="date" \r
        formControlName="runOnDate" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('runOnDate')" class="error-text">\r
        Run On Date is required\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <ng-container *ngIf="scheduleType === 'One Time' || scheduleType === 'Daily'">\r
    <div class="form-group">\r
      <label for="onceADay" class="form-label">\r
        Once A Day (HH:mm:ss) <span class="required">*</span>\r
      </label>\r
      <input \r
        id="onceADay" \r
        type="time" \r
        formControlName="onceADay" \r
        step="1" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('onceADay')" class="error-text">\r
        Time is required\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <ng-container *ngIf="scheduleType === 'Daily'">\r
    <div class="form-group">\r
      <label for="frequencyInDays" class="form-label">\r
        Frequency in Days <span class="required">*</span>\r
      </label>\r
      <input \r
        id="frequencyInDays" \r
        type="number" \r
        formControlName="frequencyInDays" \r
        min="1" \r
        max="365" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('frequencyInDays')" class="error-text">\r
        Valid number between 1 and 365 is required\r
      </div>\r
    </div>\r
\r
    <div class="form-group">\r
      <label for="scheduleStartDate" class="form-label">\r
        Schedule Start Date <span class="required">*</span>\r
      </label>\r
      <input \r
        id="scheduleStartDate" \r
        type="date" \r
        formControlName="scheduleStartDate" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('scheduleStartDate')" class="error-text">\r
        Start Date is required\r
      </div>\r
    </div>\r
\r
    <div class="form-group">\r
      <label for="scheduleEndDate" class="form-label">\r
        Schedule End Date <span class="required">*</span>\r
      </label>\r
      <input \r
        id="scheduleEndDate" \r
        type="date" \r
        formControlName="scheduleEndDate" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('scheduleEndDate')" class="error-text">\r
        End Date is required\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <ng-container *ngIf="scheduleType === 'Repeat Window'">\r
    <div class="form-group">\r
      <label for="repeatStartTime" class="form-label">\r
        Repeat Start Time (HH:mm:ss) <span class="required">*</span>\r
      </label>\r
      <input \r
        id="repeatStartTime" \r
        type="time" \r
        formControlName="repeatStartTime" \r
        step="1" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('repeatStartTime')" class="error-text">\r
        Start Time is required\r
      </div>\r
    </div>\r
\r
    <div class="form-group">\r
      <label for="repeatEndTime" class="form-label">\r
        Repeat End Time (HH:mm:ss) <span class="required">*</span>\r
      </label>\r
      <input \r
        id="repeatEndTime" \r
        type="time" \r
        formControlName="repeatEndTime" \r
        step="1" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('repeatEndTime')" class="error-text">\r
        End Time is required\r
      </div>\r
    </div>\r
\r
    <div class="form-group">\r
      <label for="intervalInSeconds" class="form-label">\r
        Interval in Seconds <span class="required">*</span>\r
      </label>\r
      <input \r
        id="intervalInSeconds" \r
        type="number" \r
        formControlName="intervalInSeconds" \r
        min="1" \r
        max="3600" \r
        class="form-control" \r
      />\r
      <div *ngIf="isFieldInvalid('intervalInSeconds')" class="error-text">\r
        Valid number between 1 and 3600 is required\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <div class="button-group">\r
    <button \r
      type="button" \r
      class="btn btn-primary" \r
      [disabled]="isSubmitting || form.invalid"\r
      (click)="onSubmit()"\r
    >\r
      <span *ngIf="!isSubmitting">Confirm Schedule</span>\r
      <span *ngIf="isSubmitting">Scheduling...</span>\r
    </button>\r
    <button \r
      type="button" \r
      class="btn btn-secondary" \r
      (click)="onCancel()"\r
      [disabled]="isSubmitting"\r
    >\r
      Cancel\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/components/form/schedule-info/schedule-info.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=schedule-info.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input6
  }], isSubmitting: [{
    type: Input6
  }], submitted: [{
    type: Output2
  }], cancelled: [{
    type: Output2
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(ScheduleInfoComponent, { className: "ScheduleInfoComponent", filePath: "src/app/components/form/schedule-info/schedule-info.component.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fform%2Fschedule-info%2Fschedule-info.component.ts%40ScheduleInfoComponent";
  function ScheduleInfoComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(ScheduleInfoComponent, m.default, [i07, i17, i24], [CommonModule7, ReactiveFormsModule4, Component7, Input6, Output2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ScheduleInfoComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ScheduleInfoComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.ts
import * as i011 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i110 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_forms.js?v=10dbc928";

// src/app/services/csv-parser.service.ts
var csv_parser_service_exports = {};
__export(csv_parser_service_exports, {
  CsvParserService: () => CsvParserService
});
import { Injectable } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i08 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
var CsvParserService = class _CsvParserService {
  parseCsvData(data) {
    try {
      const lines = data.trim().split("\n");
      if (lines.length < 2) {
        throw new Error("Invalid CSV format");
      }
      const headers = this.parseCsvLine(lines[0]);
      const reportNameIdx = headers.findIndex((h) => h.toLowerCase().includes("report name"));
      const paramIdx = headers.findIndex((h) => h.toLowerCase().includes("parameter"));
      const defaultIdx = headers.findIndex((h) => h.toLowerCase().includes("default value"));
      const selectedColsIdx = headers.findIndex((h) => h.toLowerCase().includes("selected columns"));
      const csvData = [];
      for (let i = 1; i < lines.length; i++) {
        const values = this.parseCsvLine(lines[i]);
        if (values[reportNameIdx]) {
          csvData.push({
            reportName: values[reportNameIdx]?.trim() || "",
            parameter: values[paramIdx]?.trim() || "",
            defaultValue: values[defaultIdx]?.trim() || "",
            selectedColumns: values[selectedColsIdx]?.trim() || ""
          });
        }
      }
      return csvData;
    } catch (err) {
      throw new Error("Error parsing CSV data. Please check the file format.");
    }
  }
  parseCsvLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result.map((v) => v.replace(/^"|"$/g, "").trim());
  }
  extractReportNames(csvData) {
    return [
      ...new Set(csvData.map((r) => r.reportName).filter(Boolean))
    ].sort();
  }
  getReportData(csvData, reportName) {
    return csvData.filter((r) => r.reportName === reportName);
  }
  static \u0275fac = function CsvParserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvParserService)();
  };
  static \u0275prov = /* @__PURE__ */ i08.\u0275\u0275defineInjectable({ token: _CsvParserService, factory: _CsvParserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(CsvParserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/report-data.service.ts
var report_data_service_exports = {};
__export(report_data_service_exports, {
  ReportDataService: () => ReportDataService
});
import { Injectable as Injectable2 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i09 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i18 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common_http.js?v=10dbc928";
var ReportDataService = class _ReportDataService {
  http;
  csvDataCache = [];
  constructor(http) {
    this.http = http;
  }
  loadCsv(filePath) {
    return this.http.get(filePath, { responseType: "text" });
  }
  setCsvData(data) {
    this.csvDataCache = data;
  }
  getCsvData() {
    return this.csvDataCache;
  }
  static \u0275fac = function ReportDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportDataService)(i09.\u0275\u0275inject(i18.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i09.\u0275\u0275defineInjectable({ token: _ReportDataService, factory: _ReportDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(ReportDataService, [{
    type: Injectable2,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i18.HttpClient }], null);
})();

// src/app/services/report-schedule.service.ts
var report_schedule_service_exports = {};
__export(report_schedule_service_exports, {
  ReportScheduleService: () => ReportScheduleService
});
import { Injectable as Injectable3 } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import { HttpHeaders } from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common_http.js?v=10dbc928";
import * as i010 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_core.js?v=10dbc928";
import * as i19 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common_http.js?v=10dbc928";
var ReportScheduleService = class _ReportScheduleService {
  http;
  apiUrl = "http://10.96.208.77:8181/api/reports/run";
  constructor(http) {
    this.http = http;
  }
  submitSchedule(payload) {
    return this.http.post(this.apiUrl, payload, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  static \u0275fac = function ReportScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportScheduleService)(i010.\u0275\u0275inject(i19.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i010.\u0275\u0275defineInjectable({ token: _ReportScheduleService, factory: _ReportScheduleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ReportScheduleService, [{
    type: Injectable3,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i19.HttpClient }], null);
})();

// src/app/app.ts
import * as i5 from "/@fs/C:/Users/rakeshk2/Downloads/app_v2/report-scheduler/.angular/cache/20.3.13/report-scheduler/vite/deps/@angular_common.js?v=10dbc928";
function AppComponent_app_loading_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275element(0, "app-loading-spinner");
  }
}
function AppComponent_app_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275element(0, "app-alert", 10);
  }
  if (rf & 2) {
    const ctx_r0 = i011.\u0275\u0275nextContext();
    i011.\u0275\u0275property("message", ctx_r0.errorMessage)("type", "error");
  }
}
function AppComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i011.\u0275\u0275getCurrentView();
    i011.\u0275\u0275elementStart(0, "form", 11)(1, "div", 12)(2, "div", 13);
    i011.\u0275\u0275element(3, "app-basic-info", 14);
    i011.\u0275\u0275elementStart(4, "app-report-columns", 15);
    i011.\u0275\u0275listener("columnToggled", function AppComponent_form_9_Template_app_report_columns_columnToggled_4_listener($event) {
      i011.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i011.\u0275\u0275nextContext();
      return i011.\u0275\u0275resetView(ctx_r0.onColumnToggle($event));
    });
    i011.\u0275\u0275elementEnd();
    i011.\u0275\u0275element(5, "app-parameters", 16);
    i011.\u0275\u0275elementEnd();
    i011.\u0275\u0275elementStart(6, "div", 17)(7, "app-schedule-info", 18);
    i011.\u0275\u0275listener("submitted", function AppComponent_form_9_Template_app_schedule_info_submitted_7_listener() {
      i011.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i011.\u0275\u0275nextContext();
      return i011.\u0275\u0275resetView(ctx_r0.onSubmit());
    })("cancelled", function AppComponent_form_9_Template_app_schedule_info_cancelled_7_listener() {
      i011.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i011.\u0275\u0275nextContext();
      return i011.\u0275\u0275resetView(ctx_r0.onCancel());
    });
    i011.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i011.\u0275\u0275nextContext();
    i011.\u0275\u0275property("formGroup", ctx_r0.form);
    i011.\u0275\u0275advance(3);
    i011.\u0275\u0275property("form", ctx_r0.form)("reportNames", ctx_r0.reportNames);
    i011.\u0275\u0275advance();
    i011.\u0275\u0275property("columnsList", ctx_r0.reportColumnsList)("reportColumns", ctx_r0.reportColumns)("form", ctx_r0.form);
    i011.\u0275\u0275advance();
    i011.\u0275\u0275property("parameterFields", ctx_r0.parameterFields)("parametersGroup", ctx_r0.parametersGroup);
    i011.\u0275\u0275advance(2);
    i011.\u0275\u0275property("form", ctx_r0.form)("isSubmitting", ctx_r0.isSubmitting);
  }
}
function AppComponent_app_json_display_10_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275element(0, "app-json-display", 19);
  }
  if (rf & 2) {
    const ctx_r0 = i011.\u0275\u0275nextContext();
    i011.\u0275\u0275property("data", ctx_r0.sentPayload)("isSuccess", true);
  }
}
function AppComponent_app_json_display_11_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275element(0, "app-json-display", 20);
  }
  if (rf & 2) {
    const ctx_r0 = i011.\u0275\u0275nextContext();
    i011.\u0275\u0275property("data", ctx_r0.apiResponse)("isSuccess", !ctx_r0.apiResponse.error);
  }
}
var AppComponent = class _AppComponent {
  fb;
  csvParser;
  reportData;
  reportSchedule;
  form;
  reportNames = [];
  parameterFields = [];
  reportColumnsList = [];
  isSubmitting = false;
  isLoading = false;
  sentPayload = null;
  apiResponse = null;
  errorMessage = null;
  csvData = [];
  destroy$ = new Subject();
  constructor(fb, csvParser, reportData, reportSchedule) {
    this.fb = fb;
    this.csvParser = csvParser;
    this.reportData = reportData;
    this.reportSchedule = reportSchedule;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadCsv();
    this.setupFormSubscriptions();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.form = this.fb.group({
      reportName: ["", Validators.required],
      jobName: ["", [Validators.required, Validators.minLength(3)]],
      outputName: [""],
      reportColumns: this.fb.array([], Validators.required),
      scheduleType: ["", Validators.required],
      runOnDate: [""],
      onceADay: [""],
      frequencyInDays: ["", [Validators.min(1), Validators.max(365)]],
      scheduleStartDate: [""],
      scheduleEndDate: [""],
      repeatStartTime: [""],
      repeatEndTime: [""],
      intervalInSeconds: ["", [Validators.min(1), Validators.max(3600)]],
      parameters: this.fb.group({})
    });
  }
  setupFormSubscriptions() {
    this.form.get("reportName")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => this.onReportChange(value));
    this.form.get("scheduleType")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateScheduleValidators());
  }
  updateScheduleValidators() {
    const scheduleType = this.form.get("scheduleType")?.value;
    const controls = {
      runOnDate: this.form.get("runOnDate"),
      onceADay: this.form.get("onceADay"),
      frequencyInDays: this.form.get("frequencyInDays"),
      scheduleStartDate: this.form.get("scheduleStartDate"),
      scheduleEndDate: this.form.get("scheduleEndDate"),
      repeatStartTime: this.form.get("repeatStartTime"),
      repeatEndTime: this.form.get("repeatEndTime"),
      intervalInSeconds: this.form.get("intervalInSeconds")
    };
    Object.values(controls).forEach((ctrl) => ctrl?.clearValidators());
    if (scheduleType === "One Time") {
      controls.runOnDate?.setValidators(Validators.required);
      controls.onceADay?.setValidators(Validators.required);
    } else if (scheduleType === "Daily") {
      controls.frequencyInDays?.setValidators(Validators.required);
      controls.scheduleStartDate?.setValidators(Validators.required);
      controls.scheduleEndDate?.setValidators(Validators.required);
      controls.onceADay?.setValidators(Validators.required);
    } else if (scheduleType === "Repeat Window") {
      controls.runOnDate?.setValidators(Validators.required);
      controls.repeatStartTime?.setValidators(Validators.required);
      controls.repeatEndTime?.setValidators(Validators.required);
      controls.intervalInSeconds?.setValidators(Validators.required);
    }
    Object.values(controls).forEach((ctrl) => ctrl?.updateValueAndValidity());
  }
  get parametersGroup() {
    return this.form.get("parameters");
  }
  get reportColumns() {
    return this.form.get("reportColumns");
  }
  loadCsv() {
    this.isLoading = true;
    this.reportData.loadCsv("assets/report_data.csv").pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.parseCsvAndInitialize(data);
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load CSV:", err);
        this.errorMessage = "Could not load report data. Please refresh and try again.";
        this.isLoading = false;
      }
    });
  }
  parseCsvAndInitialize(data) {
    try {
      this.csvData = this.csvParser.parseCsvData(data);
      this.reportData.setCsvData(this.csvData);
      this.reportNames = this.csvParser.extractReportNames(this.csvData);
    } catch (err) {
      console.error("CSV parsing error:", err);
      this.errorMessage = "Error parsing CSV data. Please check the file format.";
    }
  }
  onReportChange(reportName) {
    if (!reportName) {
      this.parameterFields = [];
      this.reportColumnsList = [];
      this.parametersGroup.reset();
      this.reportColumns.clear();
      return;
    }
    const reportRows = this.csvParser.getReportData(this.csvData, reportName);
    const paramRows = reportRows.filter((r) => r.parameter);
    this.parameterFields = paramRows.map((r) => ({
      parameter: r.parameter,
      defaultValue: r.defaultValue
    }));
    const group = this.parametersGroup;
    Object.keys(group.controls).forEach((key) => group.removeControl(key));
    paramRows.forEach((row) => {
      group.addControl(row.parameter, this.fb.control(row.defaultValue || ""));
    });
    const allCols = reportRows.map((r) => r.selectedColumns).filter((cols) => cols).flatMap((cols) => cols.split(",").map((c) => c.trim())).filter((c) => c);
    this.reportColumnsList = [...new Set(allCols)].sort();
    this.reportColumns.clear();
  }
  onColumnToggle(data) {
    const { column, event } = data;
    const checked = event.target.checked;
    if (checked) {
      this.reportColumns.push(this.fb.control(column));
    } else {
      const index = this.reportColumns.controls.findIndex((ctrl) => ctrl.value === column);
      if (index !== -1) {
        this.reportColumns.removeAt(index);
      }
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage = "Please fill all required fields correctly.";
      return;
    }
    this.isSubmitting = true;
    this.sentPayload = null;
    this.apiResponse = null;
    this.errorMessage = null;
    const payload = this.buildPayload();
    this.sentPayload = payload;
    console.log("Sending to API:", payload);
    this.reportSchedule.submitSchedule(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.apiResponse = response;
        this.errorMessage = null;
        alert(response?.message || "Report scheduled successfully!");
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.apiResponse = error.error || error;
        const errorMsg = error.error?.message || error.message || "Failed to schedule report";
        this.errorMessage = errorMsg;
        console.error("API Error:", error);
      }
    });
  }
  buildPayload() {
    const scheduleObj = {};
    const scheduleType = this.form.value.scheduleType;
    if (scheduleType) {
      scheduleObj["scheduleType"] = scheduleType.toUpperCase().replace(/\s+/g, "_");
      if (scheduleType === "One Time") {
        scheduleObj["runOnDate"] = this.form.value.runOnDate;
        scheduleObj["onceADay"] = this.form.value.onceADay;
      } else if (scheduleType === "Daily") {
        scheduleObj["frequencyInDays"] = Number(this.form.value.frequencyInDays) || 1;
        scheduleObj["scheduleStartDate"] = this.form.value.scheduleStartDate;
        scheduleObj["scheduleEndDate"] = this.form.value.scheduleEndDate;
        scheduleObj["onceADay"] = this.form.value.onceADay;
      } else if (scheduleType === "Repeat Window") {
        scheduleObj["runOnDate"] = this.form.value.runOnDate;
        scheduleObj["repeatStartTime"] = this.form.value.repeatStartTime;
        scheduleObj["repeatEndTime"] = this.form.value.repeatEndTime;
        scheduleObj["intervalInSeconds"] = Number(this.form.value.intervalInSeconds) || 60;
      }
    }
    return {
      informationObjectName: `${this.form.value.reportName}.dox`,
      outputName: this.form.value.outputName || null,
      selectedColumns: this.form.value.reportColumns || [],
      parameters: this.form.value.parameters || {},
      schedule: Object.keys(scheduleObj).length > 1 ? scheduleObj : null
    };
  }
  onCancel() {
    this.resetForm();
  }
  resetForm() {
    this.form.reset();
    this.parameterFields = [];
    this.reportColumnsList = [];
    this.sentPayload = null;
    this.apiResponse = null;
    this.errorMessage = null;
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(i011.\u0275\u0275directiveInject(i110.FormBuilder), i011.\u0275\u0275directiveInject(CsvParserService), i011.\u0275\u0275directiveInject(ReportDataService), i011.\u0275\u0275directiveInject(ReportScheduleService));
  };
  static \u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 12, vars: 5, consts: [[1, "container"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "config-badge"], [4, "ngIf"], [3, "message", "type", 4, "ngIf"], ["class", "form-wrapper", 3, "formGroup", 4, "ngIf"], ["title", "Sent JSON Payload:", 3, "data", "isSuccess", 4, "ngIf"], ["title", "API Response:", 3, "data", "isSuccess", 4, "ngIf"], [3, "message", "type"], [1, "form-wrapper", 3, "formGroup"], [1, "grid-layout"], [1, "left-column"], [3, "form", "reportNames"], [3, "columnToggled", "columnsList", "reportColumns", "form"], [3, "parameterFields", "parametersGroup"], [1, "right-column"], [3, "submitted", "cancelled", "form", "isSubmitting"], ["title", "Sent JSON Payload:", 3, "data", "isSuccess"], ["title", "API Response:", 3, "data", "isSuccess"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i011.\u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
      i011.\u0275\u0275text(4, "Schedule Report");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(5, "span", 4);
      i011.\u0275\u0275text(6, "New Configuration");
      i011.\u0275\u0275elementEnd()()();
      i011.\u0275\u0275template(7, AppComponent_app_loading_spinner_7_Template, 1, 0, "app-loading-spinner", 5)(8, AppComponent_app_alert_8_Template, 1, 2, "app-alert", 6)(9, AppComponent_form_9_Template, 8, 10, "form", 7)(10, AppComponent_app_json_display_10_Template, 1, 2, "app-json-display", 8)(11, AppComponent_app_json_display_11_Template, 1, 2, "app-json-display", 9);
      i011.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i011.\u0275\u0275advance(7);
      i011.\u0275\u0275property("ngIf", ctx.isLoading);
      i011.\u0275\u0275advance();
      i011.\u0275\u0275property("ngIf", ctx.errorMessage);
      i011.\u0275\u0275advance();
      i011.\u0275\u0275property("ngIf", !ctx.isLoading);
      i011.\u0275\u0275advance();
      i011.\u0275\u0275property("ngIf", ctx.sentPayload);
      i011.\u0275\u0275advance();
      i011.\u0275\u0275property("ngIf", ctx.apiResponse);
    }
  }, dependencies: [
    CommonModule8,
    i5.NgClass,
    i5.NgComponentOutlet,
    i5.NgForOf,
    i5.NgIf,
    i5.NgTemplateOutlet,
    i5.NgStyle,
    i5.NgSwitch,
    i5.NgSwitchCase,
    i5.NgSwitchDefault,
    i5.NgPlural,
    i5.NgPluralCase,
    ReactiveFormsModule5,
    i110.\u0275NgNoValidate,
    i110.NgSelectOption,
    i110.\u0275NgSelectMultipleOption,
    i110.DefaultValueAccessor,
    i110.NumberValueAccessor,
    i110.RangeValueAccessor,
    i110.CheckboxControlValueAccessor,
    i110.SelectControlValueAccessor,
    i110.SelectMultipleControlValueAccessor,
    i110.RadioControlValueAccessor,
    i110.NgControlStatus,
    i110.NgControlStatusGroup,
    i110.RequiredValidator,
    i110.MinLengthValidator,
    i110.MaxLengthValidator,
    i110.PatternValidator,
    i110.CheckboxRequiredValidator,
    i110.EmailValidator,
    i110.MinValidator,
    i110.MaxValidator,
    i110.FormControlDirective,
    i110.FormGroupDirective,
    i110.FormControlName,
    i110.FormGroupName,
    i110.FormArrayName,
    AlertComponent,
    LoadingSpinnerComponent,
    JsonDisplayComponent,
    BasicInfoComponent,
    ReportColumnsComponent,
    ParametersComponent,
    ScheduleInfoComponent,
    i5.AsyncPipe,
    i5.UpperCasePipe,
    i5.LowerCasePipe,
    i5.JsonPipe,
    i5.SlicePipe,
    i5.DecimalPipe,
    i5.PercentPipe,
    i5.TitleCasePipe,
    i5.CurrencyPipe,
    i5.DatePipe,
    i5.I18nPluralPipe,
    i5.I18nSelectPipe,
    i5.KeyValuePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(AppComponent, [{
    type: Component8,
    args: [{ selector: "app-root", standalone: true, imports: [
      CommonModule8,
      ReactiveFormsModule5,
      AlertComponent,
      LoadingSpinnerComponent,
      JsonDisplayComponent,
      BasicInfoComponent,
      ReportColumnsComponent,
      ParametersComponent,
      ScheduleInfoComponent
    ], template: `<div class="container">\r
  <header class="page-header">\r
    <div class="header-content">\r
      <h1 class="page-title">Schedule Report</h1>\r
      <span class="config-badge">New Configuration</span>\r
    </div>\r
  </header>\r
\r
  <app-loading-spinner *ngIf="isLoading"></app-loading-spinner>\r
\r
  <app-alert \r
    *ngIf="errorMessage" \r
    [message]="errorMessage" \r
    [type]="'error'"\r
  ></app-alert>\r
\r
  <form [formGroup]="form" *ngIf="!isLoading" class="form-wrapper">\r
    <div class="grid-layout">\r
      <div class="left-column">\r
        <app-basic-info \r
          [form]="form" \r
          [reportNames]="reportNames"\r
        ></app-basic-info>\r
\r
        <app-report-columns \r
          [columnsList]="reportColumnsList"\r
          [reportColumns]="reportColumns"\r
          [form]="form"\r
          (columnToggled)="onColumnToggle($event)"\r
        ></app-report-columns>\r
\r
        <app-parameters \r
          [parameterFields]="parameterFields"\r
          [parametersGroup]="parametersGroup"\r
        ></app-parameters>\r
      </div>\r
\r
      <div class="right-column">\r
        <app-schedule-info \r
          [form]="form" \r
          [isSubmitting]="isSubmitting"\r
          (submitted)="onSubmit()"\r
          (cancelled)="onCancel()"\r
        ></app-schedule-info>\r
      </div>\r
    </div>\r
  </form>\r
\r
  <app-json-display \r
    *ngIf="sentPayload" \r
    [data]="sentPayload" \r
    title="Sent JSON Payload:"\r
    [isSuccess]="true"\r
  ></app-json-display>\r
\r
  <app-json-display \r
    *ngIf="apiResponse" \r
    [data]="apiResponse" \r
    title="API Response:"\r
    [isSuccess]="!apiResponse.error"\r
  ></app-json-display>\r
</div>` }]
  }], () => [{ type: i110.FormBuilder }, { type: CsvParserService }, { type: ReportDataService }, { type: ReportScheduleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 37 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i011.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i011.\u0275\u0275replaceMetadata(AppComponent, m.default, [i011, i5, i110, csv_parser_service_exports, report_data_service_exports, report_schedule_service_exports], [CommonModule8, ReactiveFormsModule5, AlertComponent, LoadingSpinnerComponent, JsonDisplayComponent, BasicInfoComponent, ReportColumnsComponent, ParametersComponent, ScheduleInfoComponent, Component8], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hcHAudHMiLCJzcmMvYXBwL2FwcC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvanNvbi1kaXNwbGF5L2pzb24tZGlzcGxheS5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2pzb24tZGlzcGxheS9qc29uLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vYmFzaWMtaW5mby9iYXNpYy1pbmZvLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vcmVwb3J0LWNvbHVtbnMvcmVwb3J0LWNvbHVtbnMuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vcmVwb3J0LWNvbHVtbnMvcmVwb3J0LWNvbHVtbnMuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vc2NoZWR1bGUtaW5mby9zY2hlZHVsZS1pbmZvLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL3NjaGVkdWxlLWluZm8vc2NoZWR1bGUtaW5mby5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc2VydmljZXMvY3N2LXBhcnNlci5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9yZXBvcnQtZGF0YS5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9yZXBvcnQtc2NoZWR1bGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwJztcclxuXHJcbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwgYXBwQ29uZmlnKVxyXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZywgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycywgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzKCksXHJcbiAgICBwcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbih7IGV2ZW50Q29hbGVzY2luZzogdHJ1ZSB9KSxcclxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG4gIF1cclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtdO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpzb25EaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9qc29uLWRpc3BsYXkvanNvbi1kaXNwbGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhc2ljSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXBvcnRDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vcmVwb3J0LWNvbHVtbnMvcmVwb3J0LWNvbHVtbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFyYW1ldGVyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3BhcmFtZXRlcnMvcGFyYW1ldGVycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZUluZm9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9zY2hlZHVsZS1pbmZvL3NjaGVkdWxlLWluZm8uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IENzdlBhcnNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Nzdi1wYXJzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlcG9ydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXBvcnQtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwb3J0U2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXBvcnQtc2NoZWR1bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNjaGVkdWxlUGF5bG9hZCwgUGFyYW1ldGVyRmllbGQsIENzdlJvdyB9IGZyb20gJy4vbW9kZWxzL3JlcG9ydC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgSnNvbkRpc3BsYXlDb21wb25lbnQsXHJcbiAgICBCYXNpY0luZm9Db21wb25lbnQsXHJcbiAgICBSZXBvcnRDb2x1bW5zQ29tcG9uZW50LFxyXG4gICAgUGFyYW1ldGVyc0NvbXBvbmVudCxcclxuICAgIFNjaGVkdWxlSW5mb0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZm9ybSE6IEZvcm1Hcm91cDtcclxuICByZXBvcnROYW1lczogc3RyaW5nW10gPSBbXTtcclxuICBwYXJhbWV0ZXJGaWVsZHM6IFBhcmFtZXRlckZpZWxkW10gPSBbXTtcclxuICByZXBvcnRDb2x1bW5zTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgc2VudFBheWxvYWQ6IFNjaGVkdWxlUGF5bG9hZCB8IG51bGwgPSBudWxsO1xyXG4gIGFwaVJlc3BvbnNlOiBhbnkgPSBudWxsO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgY3N2RGF0YTogQ3N2Um93W10gPSBbXTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgY3N2UGFyc2VyOiBDc3ZQYXJzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZXBvcnREYXRhOiBSZXBvcnREYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVwb3J0U2NoZWR1bGU6IFJlcG9ydFNjaGVkdWxlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XHJcbiAgICB0aGlzLmxvYWRDc3YoKTtcclxuICAgIHRoaXMuc2V0dXBGb3JtU3Vic2NyaXB0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgcmVwb3J0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgam9iTmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldXSxcclxuICAgICAgb3V0cHV0TmFtZTogWycnXSxcclxuICAgICAgcmVwb3J0Q29sdW1uczogdGhpcy5mYi5hcnJheShbXSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgIHNjaGVkdWxlVHlwZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgcnVuT25EYXRlOiBbJyddLFxyXG4gICAgICBvbmNlQURheTogWycnXSxcclxuICAgICAgZnJlcXVlbmN5SW5EYXlzOiBbJycsIFtWYWxpZGF0b3JzLm1pbigxKSwgVmFsaWRhdG9ycy5tYXgoMzY1KV1dLFxyXG4gICAgICBzY2hlZHVsZVN0YXJ0RGF0ZTogWycnXSxcclxuICAgICAgc2NoZWR1bGVFbmREYXRlOiBbJyddLFxyXG4gICAgICByZXBlYXRTdGFydFRpbWU6IFsnJ10sXHJcbiAgICAgIHJlcGVhdEVuZFRpbWU6IFsnJ10sXHJcbiAgICAgIGludGVydmFsSW5TZWNvbmRzOiBbJycsIFtWYWxpZGF0b3JzLm1pbigxKSwgVmFsaWRhdG9ycy5tYXgoMzYwMCldXSxcclxuICAgICAgcGFyYW1ldGVyczogdGhpcy5mYi5ncm91cCh7fSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cEZvcm1TdWJzY3JpcHRpb25zKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtXHJcbiAgICAgIC5nZXQoJ3JlcG9ydE5hbWUnKVxyXG4gICAgICA/LnZhbHVlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLm9uUmVwb3J0Q2hhbmdlKHZhbHVlKSk7XHJcblxyXG4gICAgdGhpcy5mb3JtXHJcbiAgICAgIC5nZXQoJ3NjaGVkdWxlVHlwZScpXHJcbiAgICAgID8udmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2NoZWR1bGVWYWxpZGF0b3JzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY2hlZHVsZVZhbGlkYXRvcnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVR5cGUgPSB0aGlzLmZvcm0uZ2V0KCdzY2hlZHVsZVR5cGUnKT8udmFsdWU7XHJcbiAgICBjb25zdCBjb250cm9scyA9IHtcclxuICAgICAgcnVuT25EYXRlOiB0aGlzLmZvcm0uZ2V0KCdydW5PbkRhdGUnKSxcclxuICAgICAgb25jZUFEYXk6IHRoaXMuZm9ybS5nZXQoJ29uY2VBRGF5JyksXHJcbiAgICAgIGZyZXF1ZW5jeUluRGF5czogdGhpcy5mb3JtLmdldCgnZnJlcXVlbmN5SW5EYXlzJyksXHJcbiAgICAgIHNjaGVkdWxlU3RhcnREYXRlOiB0aGlzLmZvcm0uZ2V0KCdzY2hlZHVsZVN0YXJ0RGF0ZScpLFxyXG4gICAgICBzY2hlZHVsZUVuZERhdGU6IHRoaXMuZm9ybS5nZXQoJ3NjaGVkdWxlRW5kRGF0ZScpLFxyXG4gICAgICByZXBlYXRTdGFydFRpbWU6IHRoaXMuZm9ybS5nZXQoJ3JlcGVhdFN0YXJ0VGltZScpLFxyXG4gICAgICByZXBlYXRFbmRUaW1lOiB0aGlzLmZvcm0uZ2V0KCdyZXBlYXRFbmRUaW1lJyksXHJcbiAgICAgIGludGVydmFsSW5TZWNvbmRzOiB0aGlzLmZvcm0uZ2V0KCdpbnRlcnZhbEluU2Vjb25kcycpXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXMoY29udHJvbHMpLmZvckVhY2goY3RybCA9PiBjdHJsPy5jbGVhclZhbGlkYXRvcnMoKSk7XHJcblxyXG4gICAgaWYgKHNjaGVkdWxlVHlwZSA9PT0gJ09uZSBUaW1lJykge1xyXG4gICAgICBjb250cm9scy5ydW5PbkRhdGU/LnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIGNvbnRyb2xzLm9uY2VBRGF5Py5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgfSBlbHNlIGlmIChzY2hlZHVsZVR5cGUgPT09ICdEYWlseScpIHtcclxuICAgICAgY29udHJvbHMuZnJlcXVlbmN5SW5EYXlzPy5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICBjb250cm9scy5zY2hlZHVsZVN0YXJ0RGF0ZT8uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgY29udHJvbHMuc2NoZWR1bGVFbmREYXRlPy5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICBjb250cm9scy5vbmNlQURheT8uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgIH0gZWxzZSBpZiAoc2NoZWR1bGVUeXBlID09PSAnUmVwZWF0IFdpbmRvdycpIHtcclxuICAgICAgY29udHJvbHMucnVuT25EYXRlPy5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICBjb250cm9scy5yZXBlYXRTdGFydFRpbWU/LnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIGNvbnRyb2xzLnJlcGVhdEVuZFRpbWU/LnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIGNvbnRyb2xzLmludGVydmFsSW5TZWNvbmRzPy5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC52YWx1ZXMoY29udHJvbHMpLmZvckVhY2goY3RybCA9PiBjdHJsPy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmFtZXRlcnNHcm91cCgpOiBGb3JtR3JvdXAge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3BhcmFtZXRlcnMnKSBhcyBGb3JtR3JvdXA7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVwb3J0Q29sdW1ucygpOiBGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3JlcG9ydENvbHVtbnMnKSBhcyBGb3JtQXJyYXk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRDc3YoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnJlcG9ydERhdGFcclxuICAgICAgLmxvYWRDc3YoJ2Fzc2V0cy9yZXBvcnRfZGF0YS5jc3YnKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhcnNlQ3N2QW5kSW5pdGlhbGl6ZShkYXRhKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgQ1NWOicsIGVycik7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdDb3VsZCBub3QgbG9hZCByZXBvcnQgZGF0YS4gUGxlYXNlIHJlZnJlc2ggYW5kIHRyeSBhZ2Fpbi4nO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZUNzdkFuZEluaXRpYWxpemUoZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmNzdkRhdGEgPSB0aGlzLmNzdlBhcnNlci5wYXJzZUNzdkRhdGEoZGF0YSk7XHJcbiAgICAgIHRoaXMucmVwb3J0RGF0YS5zZXRDc3ZEYXRhKHRoaXMuY3N2RGF0YSk7XHJcbiAgICAgIHRoaXMucmVwb3J0TmFtZXMgPSB0aGlzLmNzdlBhcnNlci5leHRyYWN0UmVwb3J0TmFtZXModGhpcy5jc3ZEYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDU1YgcGFyc2luZyBlcnJvcjonLCBlcnIpO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdFcnJvciBwYXJzaW5nIENTViBkYXRhLiBQbGVhc2UgY2hlY2sgdGhlIGZpbGUgZm9ybWF0Lic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVwb3J0Q2hhbmdlKHJlcG9ydE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFyZXBvcnROYW1lKSB7XHJcbiAgICAgIHRoaXMucGFyYW1ldGVyRmllbGRzID0gW107XHJcbiAgICAgIHRoaXMucmVwb3J0Q29sdW1uc0xpc3QgPSBbXTtcclxuICAgICAgdGhpcy5wYXJhbWV0ZXJzR3JvdXAucmVzZXQoKTtcclxuICAgICAgdGhpcy5yZXBvcnRDb2x1bW5zLmNsZWFyKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXBvcnRSb3dzID0gdGhpcy5jc3ZQYXJzZXIuZ2V0UmVwb3J0RGF0YSh0aGlzLmNzdkRhdGEsIHJlcG9ydE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtUm93cyA9IHJlcG9ydFJvd3MuZmlsdGVyKHIgPT4gci5wYXJhbWV0ZXIpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJGaWVsZHMgPSBwYXJhbVJvd3MubWFwKHIgPT4gKHtcclxuICAgICAgcGFyYW1ldGVyOiByLnBhcmFtZXRlcixcclxuICAgICAgZGVmYXVsdFZhbHVlOiByLmRlZmF1bHRWYWx1ZVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5wYXJhbWV0ZXJzR3JvdXA7XHJcbiAgICBPYmplY3Qua2V5cyhncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4gZ3JvdXAucmVtb3ZlQ29udHJvbChrZXkpKTtcclxuICAgIHBhcmFtUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGdyb3VwLmFkZENvbnRyb2wocm93LnBhcmFtZXRlciwgdGhpcy5mYi5jb250cm9sKHJvdy5kZWZhdWx0VmFsdWUgfHwgJycpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFsbENvbHMgPSByZXBvcnRSb3dzXHJcbiAgICAgIC5tYXAociA9PiByLnNlbGVjdGVkQ29sdW1ucylcclxuICAgICAgLmZpbHRlcihjb2xzID0+IGNvbHMpXHJcbiAgICAgIC5mbGF0TWFwKGNvbHMgPT4gY29scy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKSlcclxuICAgICAgLmZpbHRlcihjID0+IGMpO1xyXG5cclxuICAgIHRoaXMucmVwb3J0Q29sdW1uc0xpc3QgPSBbLi4ubmV3IFNldChhbGxDb2xzKV0uc29ydCgpO1xyXG4gICAgdGhpcy5yZXBvcnRDb2x1bW5zLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBvbkNvbHVtblRvZ2dsZShkYXRhOiB7IGNvbHVtbjogc3RyaW5nOyBldmVudDogRXZlbnQgfSk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjb2x1bW4sIGV2ZW50IH0gPSBkYXRhO1xyXG4gICAgY29uc3QgY2hlY2tlZCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgIHRoaXMucmVwb3J0Q29sdW1ucy5wdXNoKHRoaXMuZmIuY29udHJvbChjb2x1bW4pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXBvcnRDb2x1bW5zLmNvbnRyb2xzLmZpbmRJbmRleChcclxuICAgICAgICBjdHJsID0+IGN0cmwudmFsdWUgPT09IGNvbHVtblxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRDb2x1bW5zLnJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcclxuICAgICAgdGhpcy5mb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnUGxlYXNlIGZpbGwgYWxsIHJlcXVpcmVkIGZpZWxkcyBjb3JyZWN0bHkuJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNTdWJtaXR0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VudFBheWxvYWQgPSBudWxsO1xyXG4gICAgdGhpcy5hcGlSZXNwb25zZSA9IG51bGw7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgcGF5bG9hZCA9IHRoaXMuYnVpbGRQYXlsb2FkKCk7XHJcbiAgICB0aGlzLnNlbnRQYXlsb2FkID0gcGF5bG9hZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZyB0byBBUEk6JywgcGF5bG9hZCk7XHJcblxyXG4gICAgdGhpcy5yZXBvcnRTY2hlZHVsZVxyXG4gICAgICAuc3VibWl0U2NoZWR1bGUocGF5bG9hZClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmFwaVJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICBhbGVydChyZXNwb25zZT8ubWVzc2FnZSB8fCAnUmVwb3J0IHNjaGVkdWxlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmFwaVJlc3BvbnNlID0gZXJyb3IuZXJyb3IgfHwgZXJyb3I7XHJcbiAgICAgICAgICBjb25zdCBlcnJvck1zZyA9XHJcbiAgICAgICAgICAgIGVycm9yLmVycm9yPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBzY2hlZHVsZSByZXBvcnQnO1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1zZztcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRQYXlsb2FkKCk6IFNjaGVkdWxlUGF5bG9hZCB7XHJcbiAgICBjb25zdCBzY2hlZHVsZU9iajogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgY29uc3Qgc2NoZWR1bGVUeXBlID0gdGhpcy5mb3JtLnZhbHVlLnNjaGVkdWxlVHlwZTtcclxuXHJcbiAgICBpZiAoc2NoZWR1bGVUeXBlKSB7XHJcbiAgICAgIHNjaGVkdWxlT2JqWydzY2hlZHVsZVR5cGUnXSA9IHNjaGVkdWxlVHlwZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJ18nKTtcclxuXHJcbiAgICAgIGlmIChzY2hlZHVsZVR5cGUgPT09ICdPbmUgVGltZScpIHtcclxuICAgICAgICBzY2hlZHVsZU9ialsncnVuT25EYXRlJ10gPSB0aGlzLmZvcm0udmFsdWUucnVuT25EYXRlO1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydvbmNlQURheSddID0gdGhpcy5mb3JtLnZhbHVlLm9uY2VBRGF5O1xyXG4gICAgICB9IGVsc2UgaWYgKHNjaGVkdWxlVHlwZSA9PT0gJ0RhaWx5Jykge1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydmcmVxdWVuY3lJbkRheXMnXSA9IE51bWJlcih0aGlzLmZvcm0udmFsdWUuZnJlcXVlbmN5SW5EYXlzKSB8fCAxO1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydzY2hlZHVsZVN0YXJ0RGF0ZSddID0gdGhpcy5mb3JtLnZhbHVlLnNjaGVkdWxlU3RhcnREYXRlO1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydzY2hlZHVsZUVuZERhdGUnXSA9IHRoaXMuZm9ybS52YWx1ZS5zY2hlZHVsZUVuZERhdGU7XHJcbiAgICAgICAgc2NoZWR1bGVPYmpbJ29uY2VBRGF5J10gPSB0aGlzLmZvcm0udmFsdWUub25jZUFEYXk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2NoZWR1bGVUeXBlID09PSAnUmVwZWF0IFdpbmRvdycpIHtcclxuICAgICAgICBzY2hlZHVsZU9ialsncnVuT25EYXRlJ10gPSB0aGlzLmZvcm0udmFsdWUucnVuT25EYXRlO1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydyZXBlYXRTdGFydFRpbWUnXSA9IHRoaXMuZm9ybS52YWx1ZS5yZXBlYXRTdGFydFRpbWU7XHJcbiAgICAgICAgc2NoZWR1bGVPYmpbJ3JlcGVhdEVuZFRpbWUnXSA9IHRoaXMuZm9ybS52YWx1ZS5yZXBlYXRFbmRUaW1lO1xyXG4gICAgICAgIHNjaGVkdWxlT2JqWydpbnRlcnZhbEluU2Vjb25kcyddID0gTnVtYmVyKHRoaXMuZm9ybS52YWx1ZS5pbnRlcnZhbEluU2Vjb25kcykgfHwgNjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbmZvcm1hdGlvbk9iamVjdE5hbWU6IGAke3RoaXMuZm9ybS52YWx1ZS5yZXBvcnROYW1lfS5kb3hgLFxyXG4gICAgICBvdXRwdXROYW1lOiB0aGlzLmZvcm0udmFsdWUub3V0cHV0TmFtZSB8fCBudWxsLFxyXG4gICAgICBzZWxlY3RlZENvbHVtbnM6IHRoaXMuZm9ybS52YWx1ZS5yZXBvcnRDb2x1bW5zIHx8IFtdLFxyXG4gICAgICBwYXJhbWV0ZXJzOiB0aGlzLmZvcm0udmFsdWUucGFyYW1ldGVycyB8fCB7fSxcclxuICAgICAgc2NoZWR1bGU6IE9iamVjdC5rZXlzKHNjaGVkdWxlT2JqKS5sZW5ndGggPiAxID8gc2NoZWR1bGVPYmogOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0Rm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgIHRoaXMucGFyYW1ldGVyRmllbGRzID0gW107XHJcbiAgICB0aGlzLnJlcG9ydENvbHVtbnNMaXN0ID0gW107XHJcbiAgICB0aGlzLnNlbnRQYXlsb2FkID0gbnVsbDtcclxuICAgIHRoaXMuYXBpUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBudWxsO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8aGVhZGVyIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+U2NoZWR1bGUgUmVwb3J0PC9oMT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjb25maWctYmFkZ2VcIj5OZXcgQ29uZmlndXJhdGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvaGVhZGVyPlxyXG5cclxuICA8YXBwLWxvYWRpbmctc3Bpbm5lciAqbmdJZj1cImlzTG9hZGluZ1wiPjwvYXBwLWxvYWRpbmctc3Bpbm5lcj5cclxuXHJcbiAgPGFwcC1hbGVydCBcclxuICAgICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgXHJcbiAgICBbbWVzc2FnZV09XCJlcnJvck1lc3NhZ2VcIiBcclxuICAgIFt0eXBlXT1cIidlcnJvcidcIlxyXG4gID48L2FwcC1hbGVydD5cclxuXHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKm5nSWY9XCIhaXNMb2FkaW5nXCIgY2xhc3M9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWxheW91dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb2x1bW5cIj5cclxuICAgICAgICA8YXBwLWJhc2ljLWluZm8gXHJcbiAgICAgICAgICBbZm9ybV09XCJmb3JtXCIgXHJcbiAgICAgICAgICBbcmVwb3J0TmFtZXNdPVwicmVwb3J0TmFtZXNcIlxyXG4gICAgICAgID48L2FwcC1iYXNpYy1pbmZvPlxyXG5cclxuICAgICAgICA8YXBwLXJlcG9ydC1jb2x1bW5zIFxyXG4gICAgICAgICAgW2NvbHVtbnNMaXN0XT1cInJlcG9ydENvbHVtbnNMaXN0XCJcclxuICAgICAgICAgIFtyZXBvcnRDb2x1bW5zXT1cInJlcG9ydENvbHVtbnNcIlxyXG4gICAgICAgICAgW2Zvcm1dPVwiZm9ybVwiXHJcbiAgICAgICAgICAoY29sdW1uVG9nZ2xlZCk9XCJvbkNvbHVtblRvZ2dsZSgkZXZlbnQpXCJcclxuICAgICAgICA+PC9hcHAtcmVwb3J0LWNvbHVtbnM+XHJcblxyXG4gICAgICAgIDxhcHAtcGFyYW1ldGVycyBcclxuICAgICAgICAgIFtwYXJhbWV0ZXJGaWVsZHNdPVwicGFyYW1ldGVyRmllbGRzXCJcclxuICAgICAgICAgIFtwYXJhbWV0ZXJzR3JvdXBdPVwicGFyYW1ldGVyc0dyb3VwXCJcclxuICAgICAgICA+PC9hcHAtcGFyYW1ldGVycz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uXCI+XHJcbiAgICAgICAgPGFwcC1zY2hlZHVsZS1pbmZvIFxyXG4gICAgICAgICAgW2Zvcm1dPVwiZm9ybVwiIFxyXG4gICAgICAgICAgW2lzU3VibWl0dGluZ109XCJpc1N1Ym1pdHRpbmdcIlxyXG4gICAgICAgICAgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgpXCJcclxuICAgICAgICAgIChjYW5jZWxsZWQpPVwib25DYW5jZWwoKVwiXHJcbiAgICAgICAgPjwvYXBwLXNjaGVkdWxlLWluZm8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG5cclxuICA8YXBwLWpzb24tZGlzcGxheSBcclxuICAgICpuZ0lmPVwic2VudFBheWxvYWRcIiBcclxuICAgIFtkYXRhXT1cInNlbnRQYXlsb2FkXCIgXHJcbiAgICB0aXRsZT1cIlNlbnQgSlNPTiBQYXlsb2FkOlwiXHJcbiAgICBbaXNTdWNjZXNzXT1cInRydWVcIlxyXG4gID48L2FwcC1qc29uLWRpc3BsYXk+XHJcblxyXG4gIDxhcHAtanNvbi1kaXNwbGF5IFxyXG4gICAgKm5nSWY9XCJhcGlSZXNwb25zZVwiIFxyXG4gICAgW2RhdGFdPVwiYXBpUmVzcG9uc2VcIiBcclxuICAgIHRpdGxlPVwiQVBJIFJlc3BvbnNlOlwiXHJcbiAgICBbaXNTdWNjZXNzXT1cIiFhcGlSZXNwb25zZS5lcnJvclwiXHJcbiAgPjwvYXBwLWpzb24tZGlzcGxheT5cclxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdHlwZTogJ2Vycm9yJyB8ICdzdWNjZXNzJyA9ICdlcnJvcic7XHJcbn0iLCI8ZGl2ICpuZ0lmPVwibWVzc2FnZVwiIFtjbGFzc109XCInYWxlcnQgYWxlcnQtJyArIHR5cGVcIj5cclxuICA8c3Ryb25nPnt7IHR5cGUgPT09ICdlcnJvcicgPyAnRXJyb3InIDogJ1N1Y2Nlc3MnIH19Ojwvc3Ryb25nPiB7eyBtZXNzYWdlIH19XHJcbjwvZGl2PiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZGluZy1zcGlubmVyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB7fVxyXG4iLCI8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+XHJcbiAgPHA+TG9hZGluZyByZXBvcnQgZGF0YS4uLjwvcD5cclxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtanNvbi1kaXNwbGF5JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9qc29uLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2pzb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uRGlzcGxheUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB0aXRsZSA9ICdEYXRhJztcclxuICBASW5wdXQoKSBpc1N1Y2Nlc3MgPSBmYWxzZTtcclxufSIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgW2NsYXNzXT1cIidqc29uLWRpc3BsYXknICsgKGlzU3VjY2VzcyA/ICcgc3VjY2VzcycgOiAnIGVycm9yJylcIj5cclxuICA8aDQgY2xhc3M9XCJqc29uLXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxyXG4gIDxwcmUgY2xhc3M9XCJqc29uLWNvbnRlbnRcIj57eyBkYXRhIHwganNvbiB9fTwvcHJlPlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJhc2ljLWluZm8nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2ljLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzaWNJbmZvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmb3JtITogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIHJlcG9ydE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBpc0ZpZWxkSW52YWxpZChmaWVsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZvcm0uZ2V0KGZpZWxkTmFtZSk7XHJcbiAgICByZXR1cm4gISEoZmllbGQgJiYgZmllbGQuaW52YWxpZCAmJiBmaWVsZC50b3VjaGVkKTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj5CYXNpYyBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJyZXBvcnROYW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgIFJlcG9ydCBOYW1lIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxzZWxlY3QgaWQ9XCJyZXBvcnROYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwicmVwb3J0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgUmVwb3J0PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG5hbWUgb2YgcmVwb3J0TmFtZXNcIiBbdmFsdWVdPVwibmFtZVwiPlxyXG4gICAgICAgIHt7IG5hbWUgfX1cclxuICAgICAgPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxkaXYgKm5nSWY9XCJpc0ZpZWxkSW52YWxpZCgncmVwb3J0TmFtZScpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgIFJlcG9ydCBOYW1lIGlzIHJlcXVpcmVkXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJqb2JOYW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgIEpvYiBOYW1lIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxpbnB1dCBcclxuICAgICAgaWQ9XCJqb2JOYW1lXCIgXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cImpvYk5hbWVcIiBcclxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBqb2IgbmFtZVwiIFxyXG4gICAgLz5cclxuICAgIDxkaXYgKm5nSWY9XCJpc0ZpZWxkSW52YWxpZCgnam9iTmFtZScpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgIEpvYiBOYW1lIGlzIHJlcXVpcmVkIChtaW5pbXVtIDMgY2hhcmFjdGVycylcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgPGxhYmVsIGZvcj1cIm91dHB1dE5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5PdXRwdXQgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgXHJcbiAgICAgIGlkPVwib3V0cHV0TmFtZVwiIFxyXG4gICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJvdXRwdXROYW1lXCIgXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiL1Rlc3QvdGVzdF9vdXRwdXQuRE9JXCIgXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3JtQXJyYXksIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1jb2x1bW5zJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQtY29sdW1ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LWNvbHVtbnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29sdW1uc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29sdW1uc0xpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgcmVwb3J0Q29sdW1ucyE6IEZvcm1BcnJheTtcclxuICBASW5wdXQoKSBmb3JtITogRm9ybUdyb3VwO1xyXG4gIEBPdXRwdXQoKSBjb2x1bW5Ub2dnbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvbHVtbjogc3RyaW5nOyBldmVudDogRXZlbnQgfT4oKTtcclxuXHJcbiAgZ2V0IGlzRm9ybUludmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZm9ybS5nZXQoJ3JlcG9ydENvbHVtbnMnKTtcclxuICAgIHJldHVybiAhIShmaWVsZCAmJiBmaWVsZC5pbnZhbGlkICYmIGZpZWxkLnRvdWNoZWQpO1xyXG4gIH1cclxuXHJcbiAgaXNDb2x1bW5TZWxlY3RlZChjb2x1bW46IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwb3J0Q29sdW1ucy52YWx1ZS5pbmNsdWRlcyhjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgb25Db2x1bW5Ub2dnbGUoY29sdW1uOiBzdHJpbmcsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2x1bW5Ub2dnbGVkLmVtaXQoeyBjb2x1bW4sIGV2ZW50IH0pO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgUmVwb3J0IENvbHVtbnMgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgPC9oMz5cclxuICBcclxuICA8ZGl2IFxyXG4gICAgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIiBcclxuICAgIFtjbGFzcy5pbnZhbGlkXT1cImlzRm9ybUludmFsaWRcIlxyXG4gID5cclxuICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5zTGlzdC5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgIFBsZWFzZSBzZWxlY3QgYSByZXBvcnQgZmlyc3QgdG8gc2VlIGF2YWlsYWJsZSBjb2x1bW5zXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1pdGVtXCIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zTGlzdFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBbY2hlY2tlZF09XCJpc0NvbHVtblNlbGVjdGVkKGNvbClcIlxyXG4gICAgICAgICAgKGNoYW5nZSk9XCJvbkNvbHVtblRvZ2dsZShjb2wsICRldmVudClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjaGVja2JveC1pbnB1dFwiIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveC10ZXh0XCI+e3sgY29sIH19PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImlzRm9ybUludmFsaWRcIiBjbGFzcz1cImVycm9yLXRleHRcIj5cclxuICAgIFBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGNvbHVtblxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUGFyYW1ldGVyRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVwb3J0Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhcmFtZXRlcnMnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlcnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcGFyYW1ldGVyRmllbGRzOiBQYXJhbWV0ZXJGaWVsZFtdID0gW107XHJcbiAgQElucHV0KCkgcGFyYW1ldGVyc0dyb3VwITogRm9ybUdyb3VwO1xyXG59IiwiPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInBhcmFtZXRlckZpZWxkcy5sZW5ndGggPiAwXCI+XHJcbiAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlBhcmFtZXRlcnM8L2gzPlxyXG4gIDxkaXYgY2xhc3M9XCJwYXJhbWV0ZXJzLWdyaWRcIiBbZm9ybUdyb3VwXT1cInBhcmFtZXRlcnNHcm91cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhcmFtLWZpZWxkXCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHBhcmFtZXRlckZpZWxkc1wiPlxyXG4gICAgICA8bGFiZWwgW2Zvcl09XCIncGFyYW1fJyArIGZpZWxkLnBhcmFtZXRlclwiIGNsYXNzPVwicGFyYW0tbGFiZWxcIj5cclxuICAgICAgICB7eyBmaWVsZC5wYXJhbWV0ZXIgfX1cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICAgIFtpZF09XCIncGFyYW1fJyArIGZpZWxkLnBhcmFtZXRlclwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQucGFyYW1ldGVyXCJcclxuICAgICAgICBjbGFzcz1cInBhcmFtLWlucHV0XCIgXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2NoZWR1bGUtaW5mbycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtaW5mby5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUluZm9Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZvcm0hOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBnZXQgc2NoZWR1bGVUeXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldCgnc2NoZWR1bGVUeXBlJyk/LnZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgaXNGaWVsZEludmFsaWQoZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5mb3JtLmdldChmaWVsZE5hbWUpO1xyXG4gICAgcmV0dXJuICEhKGZpZWxkICYmIGZpZWxkLmludmFsaWQgJiYgZmllbGQudG91Y2hlZCk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5jZWxsZWQuZW1pdCgpO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlNjaGVkdWxlIEluZm9ybWF0aW9uPC9oMz5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJzY2hlZHVsZVR5cGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgU2NoZWR1bGUgVHlwZSA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8c2VsZWN0IFxyXG4gICAgICBpZD1cInNjaGVkdWxlVHlwZVwiIFxyXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJzY2hlZHVsZVR5cGVcIiBcclxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFR5cGU8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9uZSBUaW1lXCI+T25lIFRpbWU8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRhaWx5XCI+RGFpbHk8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJlcGVhdCBXaW5kb3dcIj5SZXBlYXQgV2luZG93PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxkaXYgKm5nSWY9XCJpc0ZpZWxkSW52YWxpZCgnc2NoZWR1bGVUeXBlJylcIiBjbGFzcz1cImVycm9yLXRleHRcIj5cclxuICAgICAgU2NoZWR1bGUgVHlwZSBpcyByZXF1aXJlZFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzY2hlZHVsZVR5cGUgPT09ICdPbmUgVGltZScgfHwgc2NoZWR1bGVUeXBlID09PSAnUmVwZWF0IFdpbmRvdydcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJydW5PbkRhdGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICBSdW4gT24gRGF0ZSAoeXl5eS1NTS1kZCkgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cInJ1bk9uRGF0ZVwiIFxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCIgXHJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicnVuT25EYXRlXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgLz5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRJbnZhbGlkKCdydW5PbkRhdGUnKVwiIGNsYXNzPVwiZXJyb3ItdGV4dFwiPlxyXG4gICAgICAgIFJ1biBPbiBEYXRlIGlzIHJlcXVpcmVkXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzY2hlZHVsZVR5cGUgPT09ICdPbmUgVGltZScgfHwgc2NoZWR1bGVUeXBlID09PSAnRGFpbHknXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwib25jZUFEYXlcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICBPbmNlIEEgRGF5IChISDptbTpzcykgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cIm9uY2VBRGF5XCIgXHJcbiAgICAgICAgdHlwZT1cInRpbWVcIiBcclxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJvbmNlQURheVwiIFxyXG4gICAgICAgIHN0ZXA9XCIxXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgLz5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRJbnZhbGlkKCdvbmNlQURheScpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgICAgVGltZSBpcyByZXF1aXJlZFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2NoZWR1bGVUeXBlID09PSAnRGFpbHknXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiZnJlcXVlbmN5SW5EYXlzXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgRnJlcXVlbmN5IGluIERheXMgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cImZyZXF1ZW5jeUluRGF5c1wiIFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmcmVxdWVuY3lJbkRheXNcIiBcclxuICAgICAgICBtaW49XCIxXCIgXHJcbiAgICAgICAgbWF4PVwiMzY1XCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgLz5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRJbnZhbGlkKCdmcmVxdWVuY3lJbkRheXMnKVwiIGNsYXNzPVwiZXJyb3ItdGV4dFwiPlxyXG4gICAgICAgIFZhbGlkIG51bWJlciBiZXR3ZWVuIDEgYW5kIDM2NSBpcyByZXF1aXJlZFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJzY2hlZHVsZVN0YXJ0RGF0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgIFNjaGVkdWxlIFN0YXJ0IERhdGUgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cInNjaGVkdWxlU3RhcnREYXRlXCIgXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIiBcclxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzY2hlZHVsZVN0YXJ0RGF0ZVwiIFxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJpc0ZpZWxkSW52YWxpZCgnc2NoZWR1bGVTdGFydERhdGUnKVwiIGNsYXNzPVwiZXJyb3ItdGV4dFwiPlxyXG4gICAgICAgIFN0YXJ0IERhdGUgaXMgcmVxdWlyZWRcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2NoZWR1bGVFbmREYXRlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgU2NoZWR1bGUgRW5kIERhdGUgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cInNjaGVkdWxlRW5kRGF0ZVwiIFxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCIgXHJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2NoZWR1bGVFbmREYXRlXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgLz5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRJbnZhbGlkKCdzY2hlZHVsZUVuZERhdGUnKVwiIGNsYXNzPVwiZXJyb3ItdGV4dFwiPlxyXG4gICAgICAgIEVuZCBEYXRlIGlzIHJlcXVpcmVkXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzY2hlZHVsZVR5cGUgPT09ICdSZXBlYXQgV2luZG93J1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInJlcGVhdFN0YXJ0VGltZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgIFJlcGVhdCBTdGFydCBUaW1lIChISDptbTpzcykgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cInJlcGVhdFN0YXJ0VGltZVwiIFxyXG4gICAgICAgIHR5cGU9XCJ0aW1lXCIgXHJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicmVwZWF0U3RhcnRUaW1lXCIgXHJcbiAgICAgICAgc3RlcD1cIjFcIiBcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNGaWVsZEludmFsaWQoJ3JlcGVhdFN0YXJ0VGltZScpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgICAgU3RhcnQgVGltZSBpcyByZXF1aXJlZFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJyZXBlYXRFbmRUaW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgUmVwZWF0IEVuZCBUaW1lIChISDptbTpzcykgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBpZD1cInJlcGVhdEVuZFRpbWVcIiBcclxuICAgICAgICB0eXBlPVwidGltZVwiIFxyXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJlcGVhdEVuZFRpbWVcIiBcclxuICAgICAgICBzdGVwPVwiMVwiIFxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJpc0ZpZWxkSW52YWxpZCgncmVwZWF0RW5kVGltZScpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgICAgRW5kIFRpbWUgaXMgcmVxdWlyZWRcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiaW50ZXJ2YWxJblNlY29uZHNcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICBJbnRlcnZhbCBpbiBTZWNvbmRzIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgaWQ9XCJpbnRlcnZhbEluU2Vjb25kc1wiIFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpbnRlcnZhbEluU2Vjb25kc1wiIFxyXG4gICAgICAgIG1pbj1cIjFcIiBcclxuICAgICAgICBtYXg9XCIzNjAwXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgLz5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRJbnZhbGlkKCdpbnRlcnZhbEluU2Vjb25kcycpXCIgY2xhc3M9XCJlcnJvci10ZXh0XCI+XHJcbiAgICAgICAgVmFsaWQgbnVtYmVyIGJldHdlZW4gMSBhbmQgMzYwMCBpcyByZXF1aXJlZFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICA8YnV0dG9uIFxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgXHJcbiAgICAgIFtkaXNhYmxlZF09XCJpc1N1Ym1pdHRpbmcgfHwgZm9ybS5pbnZhbGlkXCJcclxuICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KClcIlxyXG4gICAgPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIiFpc1N1Ym1pdHRpbmdcIj5Db25maXJtIFNjaGVkdWxlPC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImlzU3VibWl0dGluZ1wiPlNjaGVkdWxpbmcuLi48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIFxyXG4gICAgICAoY2xpY2spPVwib25DYW5jZWwoKVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJpc1N1Ym1pdHRpbmdcIlxyXG4gICAgPlxyXG4gICAgICBDYW5jZWxcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENzdlJvdyB9IGZyb20gJy4uL21vZGVscy9yZXBvcnQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3N2UGFyc2VyU2VydmljZSB7XHJcbiAgcGFyc2VDc3ZEYXRhKGRhdGE6IHN0cmluZyk6IENzdlJvd1tdIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gZGF0YS50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBpZiAobGluZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDU1YgZm9ybWF0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLnBhcnNlQ3N2TGluZShsaW5lc1swXSk7XHJcbiAgICAgIGNvbnN0IHJlcG9ydE5hbWVJZHggPSBoZWFkZXJzLmZpbmRJbmRleChoID0+XHJcbiAgICAgICAgaC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXBvcnQgbmFtZScpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHBhcmFtSWR4ID0gaGVhZGVycy5maW5kSW5kZXgoaCA9PlxyXG4gICAgICAgIGgudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncGFyYW1ldGVyJylcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGVmYXVsdElkeCA9IGhlYWRlcnMuZmluZEluZGV4KGggPT5cclxuICAgICAgICBoLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RlZmF1bHQgdmFsdWUnKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZENvbHNJZHggPSBoZWFkZXJzLmZpbmRJbmRleChoID0+XHJcbiAgICAgICAgaC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzZWxlY3RlZCBjb2x1bW5zJylcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGNzdkRhdGE6IENzdlJvd1tdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnBhcnNlQ3N2TGluZShsaW5lc1tpXSk7XHJcbiAgICAgICAgaWYgKHZhbHVlc1tyZXBvcnROYW1lSWR4XSkge1xyXG4gICAgICAgICAgY3N2RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgcmVwb3J0TmFtZTogdmFsdWVzW3JlcG9ydE5hbWVJZHhdPy50cmltKCkgfHwgJycsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcjogdmFsdWVzW3BhcmFtSWR4XT8udHJpbSgpIHx8ICcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlc1tkZWZhdWx0SWR4XT8udHJpbSgpIHx8ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZENvbHVtbnM6IHZhbHVlc1tzZWxlY3RlZENvbHNJZHhdPy50cmltKCkgfHwgJydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3N2RGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHBhcnNpbmcgQ1NWIGRhdGEuIFBsZWFzZSBjaGVjayB0aGUgZmlsZSBmb3JtYXQuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXJzZUNzdkxpbmUobGluZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnQgPSAnJztcclxuICAgIGxldCBpblF1b3RlcyA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGFyID0gbGluZVtpXTtcclxuICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnLCcgJiYgIWluUXVvdGVzKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnQgKz0gY2hhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnB1c2goY3VycmVudCk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IHYucmVwbGFjZSgvXlwifFwiJC9nLCAnJykudHJpbSgpKTtcclxuICB9XHJcblxyXG4gIGV4dHJhY3RSZXBvcnROYW1lcyhjc3ZEYXRhOiBDc3ZSb3dbXSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLm5ldyBTZXQoY3N2RGF0YS5tYXAociA9PiByLnJlcG9ydE5hbWUpLmZpbHRlcihCb29sZWFuKSlcclxuICAgIF0uc29ydCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVwb3J0RGF0YShjc3ZEYXRhOiBDc3ZSb3dbXSwgcmVwb3J0TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gY3N2RGF0YS5maWx0ZXIociA9PiByLnJlcG9ydE5hbWUgPT09IHJlcG9ydE5hbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDc3ZSb3cgfSBmcm9tICcuLi9tb2RlbHMvcmVwb3J0Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydERhdGFTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNzdkRhdGFDYWNoZTogQ3N2Um93W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsb2FkQ3N2KGZpbGVQYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZmlsZVBhdGgsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRDc3ZEYXRhKGRhdGE6IENzdlJvd1tdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNzdkRhdGFDYWNoZSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRDc3ZEYXRhKCk6IENzdlJvd1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNzdkRhdGFDYWNoZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZVBheWxvYWQgfSBmcm9tICcuLi9tb2RlbHMvcmVwb3J0Lm1vZGVsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0U2NoZWR1bGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaVVybCA9ICdodHRwOi8vMTAuOTYuMjA4Ljc3OjgxODEvYXBpL3JlcG9ydHMvcnVuJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBzdWJtaXRTY2hlZHVsZShwYXlsb2FkOiBTY2hlZHVsZVBheWxvYWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hcGlVcmwsIHBheWxvYWQsIHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTLDRCQUE0Qjs7O0FDQXJDLFNBQTRCLG9DQUFvQyxrQ0FBa0M7QUFDbEcsU0FBUyxxQkFBcUI7OztBQ0N2QixJQUFNLFNBQWlCLENBQUE7OztBREd2QixJQUFNLFlBQStCO0VBQzFDLFdBQVc7SUFDVCxtQ0FBa0M7SUFDbEMsMkJBQTJCLEVBQUUsaUJBQWlCLEtBQUksQ0FBRTtJQUNwRCxjQUFjLE1BQU07Ozs7O0FFVHhCLFNBQVMsYUFBQUEsa0JBQW9DO0FBQzdDLFNBQVMsZ0JBQUFDLHFCQUFvQjtBQUM3QixTQUFpQyxZQUF1Qix1QkFBQUMsNEJBQTJCO0FBRW5GLFNBQVMsU0FBUyxpQkFBaUI7OztBRUpuQyxTQUFTLFdBQVcsYUFBYTtBQUNqQyxTQUFTLG9CQUFvQjs7Ozs7QUNEN0IsSUFBQSw0QkFBQSxHQUFBLEtBQUEsRUFBcUQsR0FBQSxRQUFBO0FBQzNDLElBQUEsb0JBQUEsQ0FBQTtBQUE2QyxJQUFBLDBCQUFBO0FBQVUsSUFBQSxvQkFBQSxDQUFBO0FBQ2pFLElBQUEsMEJBQUE7Ozs7QUFGcUIsSUFBQSx3QkFBQSxpQkFB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Q0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxxQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBSGhDekIscUJBQXFCLGNBQWMsU0FBUyxFQUN6QyxNQUFNLENBQUMsUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkxIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkxIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkxIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiaTAiLCJpMSIsImkyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiaTAiLCJpMSIsImkyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJFdmVudEVtaXR0ZXIiLCJDb21tb25Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiaTAiLCJpMSIsImkyIiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJDb21tb25Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSJdfQ==