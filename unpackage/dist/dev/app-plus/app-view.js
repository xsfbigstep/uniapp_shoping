/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************!*\
  !*** D:/study_demo/uniapp_shoping/main.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/main.js):\nSyntaxError: Identifier 'App' has already been declared (18:7)\n    at Object._raise (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at TypeScriptScopeHandler.checkRedeclarationInScope (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:4793:12)\n    at TypeScriptScopeHandler.declareName (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:4759:12)\n    at TypeScriptScopeHandler.declareName (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:4869:11)\n    at Object.checkLVal (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:9261:22)\n    at Object.checkLVal (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:6949:15)\n    at Object.parseImportSpecifierLocal (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:12552:10)\n    at Object.maybeParseDefaultImportSpecifier (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:12597:12)\n    at Object.parseImport (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:12523:31)\n    at Object.parseImport (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:6506:30)\n    at Object.parseStatementContent (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:11254:27)\n    at Object.parseStatementContent (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:6575:18)\n    at Object.parseStatement (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\myPragram File\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)");

/***/ })
/******/ ]);