/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "f0fdf0038d28e17fa816";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};

module.exports.formatError = function(err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?100 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?100"))

/***/ }),

/***/ "./src/config/app/app.config.module.ts":
/*!*********************************************!*\
  !*** ./src/config/app/app.config.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_config_service_1 = __webpack_require__(/*! ./app.config.service */ "./src/config/app/app.config.service.ts");
const app_config_1 = __webpack_require__(/*! ./app.config */ "./src/config/app/app.config.ts");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default]
            }),
        ],
        providers: [app_config_service_1.AppConfigService],
        exports: [app_config_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


/***/ }),

/***/ "./src/config/app/app.config.service.ts":
/*!**********************************************!*\
  !*** ./src/config/app/app.config.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AppConfigService = class AppConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('app');
    }
    get host() {
        return this.config.listen.host;
    }
    get port() {
        return this.config.listen.port;
    }
};
AppConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AppConfigService);
exports.AppConfigService = AppConfigService;


/***/ }),

/***/ "./src/config/app/app.config.ts":
/*!**************************************!*\
  !*** ./src/config/app/app.config.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    },
    production: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    }
};
exports.default = config_1.registerAs('app', () => configs["development" || false]);


/***/ }),

/***/ "./src/config/database/database.config.module.ts":
/*!*******************************************************!*\
  !*** ./src/config/database/database.config.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const database_config_service_1 = __webpack_require__(/*! ./database.config.service */ "./src/config/database/database.config.service.ts");
const database_config_1 = __webpack_require__(/*! ./database.config */ "./src/config/database/database.config.ts");
let DatabaseConfigModule = class DatabaseConfigModule {
};
DatabaseConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [database_config_1.default]
            }),
        ],
        providers: [database_config_service_1.DatabaseConfigService],
        exports: [database_config_service_1.DatabaseConfigService]
    })
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;


/***/ }),

/***/ "./src/config/database/database.config.service.ts":
/*!********************************************************!*\
  !*** ./src/config/database/database.config.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DatabaseConfigService = class DatabaseConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('database');
    }
    get url() {
        return this.config.url;
    }
    get options() {
        return this.config.options;
    }
};
DatabaseConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;


/***/ }),

/***/ "./src/config/database/database.config.ts":
/*!************************************************!*\
  !*** ./src/config/database/database.config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    production: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: DATABASE_CONNECTION, USER_MODEL, CHAT_MODEL, MESSAGE_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_CONNECTION", function() { return DATABASE_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MODEL", function() { return USER_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_MODEL", function() { return CHAT_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_MODEL", function() { return MESSAGE_MODEL; });
const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
const USER_MODEL = 'USER_MODEL';
const CHAT_MODEL = 'CHAT_MODEL';
const MESSAGE_MODEL = 'MESSAGE_MODEL';

/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./src/database/database.providers.ts");
const database_config_module_1 = __webpack_require__(/*! ../config/database/database.config.module */ "./src/config/database/database.config.module.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [database_config_module_1.DatabaseConfigModule],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: (databaseConfigService) => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ }),

/***/ "./src/database/schemas/chats.schema.ts":
/*!**********************************************!*\
  !*** ./src/database/schemas/chats.schema.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsSchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.ChatsSchema = new mongoose.Schema({
    title: String,
    participants: [String],
});


/***/ }),

/***/ "./src/database/schemas/messages.schema.ts":
/*!*************************************************!*\
  !*** ./src/database/schemas/messages.schema.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesSchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.MessagesSchema = new mongoose.Schema({
    text: String,
    chatId: String,
    date: Date,
    userId: String
});


/***/ }),

/***/ "./src/database/schemas/users.schema.ts":
/*!**********************************************!*\
  !*** ./src/database/schemas/users.schema.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.UsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String
});


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_module_1 = __webpack_require__(/*! ./modules/api/api.module */ "./src/modules/api/api.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_module_1.ApiModule, { cors: true });
    const appConfig = app.get('AppConfigService');
    app.setGlobalPrefix('/api/1.0');
    await app.listen(appConfig.port);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ }),

/***/ "./src/modules/api/api.module.ts":
/*!***************************************!*\
  !*** ./src/modules/api/api.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const morgan_1 = __webpack_require__(/*! @nest-middlewares/morgan */ "@nest-middlewares/morgan");
const database_module_1 = __webpack_require__(/*! ../../database/database.module */ "./src/database/database.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./src/modules/api/users/users.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/modules/api/auth/auth.module.ts");
const chats_module_1 = __webpack_require__(/*! ./chats/chats.module */ "./src/modules/api/chats/chats.module.ts");
const messages_module_1 = __webpack_require__(/*! ./messages/messages.module */ "./src/modules/api/messages/messages.module.ts");
const app_config_module_1 = __webpack_require__(/*! ../../config/app/app.config.module */ "./src/config/app/app.config.module.ts");
const websocket_gateway_1 = __webpack_require__(/*! ./websocket.gateway */ "./src/modules/api/websocket.gateway.ts");
let ApiModule = class ApiModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
ApiModule = __decorate([
    common_1.Module({
        imports: [
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            chats_module_1.ChatsModule,
            messages_module_1.MessagesModule
        ],
        providers: [websocket_gateway_1.WebsocketGateway]
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),

/***/ "./src/modules/api/auth/auth.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/api/auth/auth.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/api/auth/auth.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signin(req) {
    }
    async signup(req) {
        return this.authService.signup(req.body);
    }
};
__decorate([
    common_1.Post('signin'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "signin", null);
__decorate([
    common_1.Post('signup'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "signup", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./src/modules/api/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/api/auth/auth.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/api/users/users.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/api/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/api/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [users_module_1.UsersModule],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/modules/api/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/api/auth/auth.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
const helpers = __webpack_require__(/*! ../../../utils/helpers */ "./src/utils/helpers/index.js");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signup(authData) {
        const existingUser = await this.userModel.findOne({ email: authData.email });
        const token = helpers.generateToken(existingUser.password);
        if (existingUser) {
            existingUser.token = token;
            return await existingUser.save();
        }
        else {
            const createdUser = new this.userModel(Object.assign({ token }, authData));
            return createdUser.save();
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/modules/api/chats/chats.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/api/chats/chats.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chats_service_1 = __webpack_require__(/*! ./chats.service */ "./src/modules/api/chats/chats.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let ChatsController = class ChatsController {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    async getMe(req) {
        return this.chatsService.getMe(req.query.token);
    }
    async create(req) {
        return this.chatsService.create(req.body);
    }
};
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ChatsController.prototype, "getMe", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChatsController.prototype, "create", null);
ChatsController = __decorate([
    common_1.Controller('chats'),
    __metadata("design:paramtypes", [typeof (_e = typeof chats_service_1.ChatsService !== "undefined" && chats_service_1.ChatsService) === "function" ? _e : Object])
], ChatsController);
exports.ChatsController = ChatsController;


/***/ }),

/***/ "./src/modules/api/chats/chats.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/api/chats/chats.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_module_1 = __webpack_require__(/*! ../../../database/database.module */ "./src/database/database.module.ts");
const chats_controller_1 = __webpack_require__(/*! ./chats.controller */ "./src/modules/api/chats/chats.controller.ts");
const chats_service_1 = __webpack_require__(/*! ./chats.service */ "./src/modules/api/chats/chats.service.ts");
const chats_providers_1 = __webpack_require__(/*! ./chats.providers */ "./src/modules/api/chats/chats.providers.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/api/users/users.module.ts");
let ChatsModule = class ChatsModule {
};
ChatsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, users_module_1.UsersModule],
        controllers: [chats_controller_1.ChatsController],
        providers: [
            chats_service_1.ChatsService,
            ...chats_providers_1.chatProviders
        ],
        exports: chats_providers_1.chatProviders
    })
], ChatsModule);
exports.ChatsModule = ChatsModule;


/***/ }),

/***/ "./src/modules/api/chats/chats.providers.ts":
/*!**************************************************!*\
  !*** ./src/modules/api/chats/chats.providers.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chatProviders = void 0;
const chats_schema_1 = __webpack_require__(/*! ../../../database/schemas/chats.schema */ "./src/database/schemas/chats.schema.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
exports.chatProviders = [
    {
        provide: constants_1.CHAT_MODEL,
        useFactory: (connection) => connection.model('Chat', chats_schema_1.ChatsSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ }),

/***/ "./src/modules/api/chats/chats.service.ts":
/*!************************************************!*\
  !*** ./src/modules/api/chats/chats.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsService = void 0;
const underscore_1 = __webpack_require__(/*! underscore */ "underscore");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
let ChatsService = class ChatsService {
    constructor(userModel, chatModel) {
        this.userModel = userModel;
        this.chatModel = chatModel;
    }
    async getMe(token) {
        const currentUser = this.userModel.findOne({ token: token });
        if (currentUser) {
            return this.chatModel.find({ participantIds: currentUser._id });
        }
        else {
            return [];
        }
    }
    async create(params) {
        const user = await this.userModel.findOne({ token: params.token });
        if (!user) {
            throw new Error('Current user not found');
        }
        const participants = underscore_1.default([user._id.toString(), ...params.chat.participants]).uniq();
        const existingChat = await this.chatModel.findOne({
            participants: {
                $all: participants
            }
        });
        if (existingChat) {
            return existingChat;
        }
        else {
            const chat = new this.chatModel(Object.assign({ participants }, params.chat));
            return chat.save();
        }
    }
};
ChatsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __param(1, common_1.Inject(constants_1.CHAT_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object])
], ChatsService);
exports.ChatsService = ChatsService;


/***/ }),

/***/ "./src/modules/api/messages/messages.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/api/messages/messages.controller.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const messages_service_1 = __webpack_require__(/*! ./messages.service */ "./src/modules/api/messages/messages.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async getMe(req) {
        return this.messagesService.getMe(req.query.token);
    }
    async create(req) {
        return this.messagesService.create(req.body);
    }
};
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MessagesController.prototype, "getMe", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MessagesController.prototype, "create", null);
MessagesController = __decorate([
    common_1.Controller('messages'),
    __metadata("design:paramtypes", [typeof (_e = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" ? _e : Object])
], MessagesController);
exports.MessagesController = MessagesController;


/***/ }),

/***/ "./src/modules/api/messages/messages.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/api/messages/messages.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_module_1 = __webpack_require__(/*! ../../../database/database.module */ "./src/database/database.module.ts");
const messages_controller_1 = __webpack_require__(/*! ./messages.controller */ "./src/modules/api/messages/messages.controller.ts");
const messages_service_1 = __webpack_require__(/*! ./messages.service */ "./src/modules/api/messages/messages.service.ts");
const messages_providers_1 = __webpack_require__(/*! ./messages.providers */ "./src/modules/api/messages/messages.providers.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/api/users/users.module.ts");
const chats_module_1 = __webpack_require__(/*! ../chats/chats.module */ "./src/modules/api/chats/chats.module.ts");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, users_module_1.UsersModule, chats_module_1.ChatsModule],
        controllers: [messages_controller_1.MessagesController],
        providers: [
            messages_service_1.MessagesService,
            ...messages_providers_1.messagesProviders
        ],
        exports: messages_providers_1.messagesProviders
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;


/***/ }),

/***/ "./src/modules/api/messages/messages.providers.ts":
/*!********************************************************!*\
  !*** ./src/modules/api/messages/messages.providers.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesProviders = void 0;
const messages_schema_1 = __webpack_require__(/*! ../../../database/schemas/messages.schema */ "./src/database/schemas/messages.schema.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
exports.messagesProviders = [
    {
        provide: constants_1.MESSAGE_MODEL,
        useFactory: (connection) => connection.model('Message', messages_schema_1.MessagesSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ }),

/***/ "./src/modules/api/messages/messages.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/api/messages/messages.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const underscore_1 = __webpack_require__(/*! underscore */ "underscore");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
let MessagesService = class MessagesService {
    constructor(userModel, messageModel, chatModel) {
        this.userModel = userModel;
        this.messageModel = messageModel;
        this.chatModel = chatModel;
    }
    async getMe(token) {
        const currentUser = await this.userModel.findOne({ token: token });
        const currentUserChats = await this.chatModel.find({ participants: currentUser._id });
        return this.messageModel.find({ chatId: { $in: underscore_1.default(currentUserChats).pluck('_id') } });
    }
    async create(params) {
        const currentUser = await this.userModel.findOne({ token: params.token });
        const message = new this.messageModel(params.message);
        message.userId = currentUser._id;
        return message.save();
    }
};
MessagesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __param(1, common_1.Inject(constants_1.MESSAGE_MODEL)),
    __param(2, common_1.Inject(constants_1.CHAT_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _c : Object])
], MessagesService);
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./src/modules/api/users/users.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/api/users/users.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/api/users/users.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getMe(req) {
        return this.usersService.getMe(req.query.token);
    }
    async get(req) {
        return this.usersService.get(req.query);
    }
};
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getMe", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "get", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [typeof (_e = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _e : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/modules/api/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/api/users/users.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_module_1 = __webpack_require__(/*! ../../../database/database.module */ "./src/database/database.module.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/api/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/api/users/users.service.ts");
const users_providers_1 = __webpack_require__(/*! ./users.providers */ "./src/modules/api/users/users.providers.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            ...users_providers_1.usersProviders
        ],
        exports: users_providers_1.usersProviders
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/modules/api/users/users.providers.ts":
/*!**************************************************!*\
  !*** ./src/modules/api/users/users.providers.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const users_schema_1 = __webpack_require__(/*! ../../../database/schemas/users.schema */ "./src/database/schemas/users.schema.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
exports.usersProviders = [
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', users_schema_1.UsersSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ }),

/***/ "./src/modules/api/users/users.service.ts":
/*!************************************************!*\
  !*** ./src/modules/api/users/users.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getMe(token) {
        return this.userModel.findOne({ token: token });
    }
    async get(params) {
        const condition = {};
        if (params.query) {
            condition.email = { $regex: new RegExp(params.query, 'i') };
        }
        return this.userModel.find(condition, { email: 1, _id: 1 });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./src/modules/api/websocket.gateway.ts":
/*!**********************************************!*\
  !*** ./src/modules/api/websocket.gateway.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let WebsocketGateway = class WebsocketGateway {
    constructor() {
        this.logger = new common_1.Logger('ChatsGateway');
    }
    joinRooms(client, data) {
        this.logger.log(`${client.id} joined to room: ${data}`);
        client.join(data);
        return { event: 'joinRooms', data };
    }
    message(client, data) {
        this.server.to(data.chatId).emit('message', data.text);
    }
    afterInit() {
        this.logger.log('Init websocket server');
    }
    handleConnection(client, ...args) {
        client.leaveAll();
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], WebsocketGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('joinRooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, Array]),
    __metadata("design:returntype", typeof (_c = typeof websockets_1.WsResponse !== "undefined" && websockets_1.WsResponse) === "function" ? _c : Object)
], WebsocketGateway.prototype, "joinRooms", null);
__decorate([
    websockets_1.SubscribeMessage('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, typeof (_e = typeof Object !== "undefined" && Object) === "function" ? _e : Object]),
    __metadata("design:returntype", Object)
], WebsocketGateway.prototype, "message", null);
WebsocketGateway = __decorate([
    websockets_1.WebSocketGateway(3300)
], WebsocketGateway);
exports.WebsocketGateway = WebsocketGateway;


/***/ }),

/***/ "./src/utils/helpers sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/utils/helpers sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./src/utils/helpers/index.js",
	"./auth": "./src/utils/helpers/auth.js",
	"./auth.js": "./src/utils/helpers/auth.js",
	"./index": "./src/utils/helpers/index.js",
	"./index.js": "./src/utils/helpers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/utils/helpers sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/utils/helpers/auth.js":
/*!***********************************!*\
  !*** ./src/utils/helpers/auth.js ***!
  \***********************************/
/*! exports provided: generateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateToken", function() { return generateToken; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


const generateToken = (password) => {
	const salt = new Buffer(Date.now().toString());

	var hash = crypto__WEBPACK_IMPORTED_MODULE_0__["createHmac"]('sha512', salt);
	hash.update(password);

	return hash.digest('hex');
};

/***/ }),

/***/ "./src/utils/helpers/index.js":
/*!************************************!*\
  !*** ./src/utils/helpers/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const helpers = ['auth'];

helpers.forEach((helperName) => {
	const helper = __webpack_require__("./src/utils/helpers sync recursive ^\\.\\/.*$")(`./${helperName}`);
	module.exports = {...helper, ...module.exports};
});

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi webpack/hot/poll?100 ./src/main.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack/hot/poll?100 */"./node_modules/webpack/hot/poll.js?100");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ }),

/***/ "@nest-middlewares/morgan":
/*!*******************************************!*\
  !*** external "@nest-middlewares/morgan" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nest-middlewares/morgan");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3QvbG9nLWFwcGx5LXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdC9sb2cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3QvcG9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlLnByb3ZpZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy9jaGF0cy5zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFiYXNlL3NjaGVtYXMvbWVzc2FnZXMuc2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9zY2hlbWFzL3VzZXJzLnNjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXBpLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2F1dGgvYXV0aC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS9jaGF0cy9jaGF0cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS9jaGF0cy9jaGF0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2NoYXRzL2NoYXRzLnByb3ZpZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvbWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvbWVzc2FnZXMvbWVzc2FnZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS9tZXNzYWdlcy9tZXNzYWdlcy5wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL21lc3NhZ2VzL21lc3NhZ2VzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL3VzZXJzL3VzZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvdXNlcnMvdXNlcnMucHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS91c2Vycy91c2Vycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS93ZWJzb2NrZXQuZ2F0ZXdheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdC1taWRkbGV3YXJlcy9tb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy93ZWJzb2NrZXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZXJzY29yZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Ozs7Ozs7QUNMRCxxRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIik7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rLmlkLCBjaHVuay5tb2R1bGVzKTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KCkge1xuIFx0XHR0cnkge1xuIFx0XHRcdHZhciB1cGRhdGUgPSByZXF1aXJlKFwiLi9cIiArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiKTtcbiBcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVwZGF0ZSk7XG4gXHR9XG5cbiBcdC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZjBmZGYwMDM4ZDI4ZTE3ZmE4MTZcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcIm1haW5cIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24obW9kdWxlSWQpIHtcblx0XHRyZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuXHR9KTtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblxuXHRpZiAodW5hY2NlcHRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZyhcblx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XCJbSE1SXSBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGRuJ3QgYmUgaG90IHVwZGF0ZWQ6IChUaGV5IHdvdWxkIG5lZWQgYSBmdWxsIHJlbG9hZCEpXCJcblx0XHQpO1xuXHRcdHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIG1vZHVsZUlkID09PSBcIm51bWJlclwiO1xuXHRcdH0pO1xuXHRcdGlmIChudW1iZXJJZHMpXG5cdFx0XHRsb2coXG5cdFx0XHRcdFwiaW5mb1wiLFxuXHRcdFx0XHRcIltITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBOYW1lZE1vZHVsZXNQbHVnaW4gZm9yIG1vZHVsZSBuYW1lcy5cIlxuXHRcdFx0KTtcblx0fVxufTtcbiIsInZhciBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuXG5mdW5jdGlvbiBkdW1teSgpIHt9XG5cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGV2ZWwsIG1zZykge1xuXHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdGlmIChsZXZlbCA9PT0gXCJpbmZvXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUud2Fybihtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdH1cblx0fVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG52YXIgZ3JvdXAgPSBjb25zb2xlLmdyb3VwIHx8IGR1bW15O1xudmFyIGdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZCB8fCBkdW1teTtcbnZhciBncm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQgfHwgZHVtbXk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cCA9IGxvZ0dyb3VwKGdyb3VwKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBDb2xsYXBzZWQgPSBsb2dHcm91cChncm91cENvbGxhcHNlZCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwRW5kID0gbG9nR3JvdXAoZ3JvdXBFbmQpO1xuXG5tb2R1bGUuZXhwb3J0cy5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuXHR2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXHR2YXIgc3RhY2sgPSBlcnIuc3RhY2s7XG5cdGlmICghc3RhY2spIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSBlbHNlIGlmIChzdGFjay5pbmRleE9mKG1lc3NhZ2UpIDwgMCkge1xuXHRcdHJldHVybiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vKmdsb2JhbHMgX19yZXNvdXJjZVF1ZXJ5ICovXG5pZiAobW9kdWxlLmhvdCkge1xuXHR2YXIgaG90UG9sbEludGVydmFsID0gK19fcmVzb3VyY2VRdWVyeS5zdWJzdHIoMSkgfHwgMTAgKiA2MCAqIDEwMDA7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0dmFyIGNoZWNrRm9yVXBkYXRlID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGUoZnJvbVVwZGF0ZSkge1xuXHRcdGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bW9kdWxlLmhvdFxuXHRcdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAoZnJvbVVwZGF0ZSkgbG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZSBhcHBsaWVkLlwiKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRcdGNoZWNrRm9yVXBkYXRlKHRydWUpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuXCIpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFlvdSBuZWVkIHRvIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIVwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRzZXRJbnRlcnZhbChjaGVja0ZvclVwZGF0ZSwgaG90UG9sbEludGVydmFsKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vYXBwLmNvbmZpZyc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgbG9hZDogW2FwcENvbmZpZ11cbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcHBDb25maWdTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbQXBwQ29uZmlnU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZzogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldDxvYmplY3Q+KCdhcHAnKTtcbiAgICB9XG5cbiAgICBnZXQgaG9zdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcubGlzdGVuLmhvc3Q7XG4gICAgfVxuXG4gICAgZ2V0IHBvcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmxpc3Rlbi5wb3J0XG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgbGlzdGVuOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IDMyMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICBsaXN0ZW46IHtcbiAgICAgICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgcG9ydDogMzIwMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdhcHAnLCAoKSA9PiBjb25maWdzW3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCddKTsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vZGF0YWJhc2UuY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgZGF0YWJhc2VDb25maWcgZnJvbSAnLi9kYXRhYmFzZS5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFtkYXRhYmFzZUNvbmZpZ11cbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VDb25maWdNb2R1bGUge30iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQ29uZmlnU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8b2JqZWN0PignZGF0YWJhc2UnKTtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy51cmw7XG4gICAgfVxuXG4gICAgZ2V0IG9wdGlvbnMoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnNcbiAgICB9XG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuY29uc3QgY29uZmlncyA9IHtcbiAgICBkZXZlbG9wbWVudDoge1xuICAgICAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnZGF0YWJhc2UnLCAoKSA9PiBjb25maWdzW3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCddKTsiLCJleHBvcnQgY29uc3QgREFUQUJBU0VfQ09OTkVDVElPTiA9ICdEQVRBQkFTRV9DT05ORUNUSU9OJztcbmV4cG9ydCBjb25zdCBVU0VSX01PREVMID0gJ1VTRVJfTU9ERUwnO1xuZXhwb3J0IGNvbnN0IENIQVRfTU9ERUwgPSAnQ0hBVF9NT0RFTCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9NT0RFTCA9ICdNRVNTQUdFX01PREVMJzsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgIHsgZGF0YWJhc2VQcm92aWRlcnMgfSBmcm9tICcuL2RhdGFiYXNlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlQ29uZmlnTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc10sXG4gICAgZXhwb3J0czogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlTW9kdWxlIHt9IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgRGF0YWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgREFUQUJBU0VfQ09OTkVDVElPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IERBVEFCQVNFX0NPTk5FQ1RJT04sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChkYXRhYmFzZUNvbmZpZ1NlcnZpY2U6IERhdGFiYXNlQ29uZmlnU2VydmljZSk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChkYXRhYmFzZUNvbmZpZ1NlcnZpY2UudXJsLCBkYXRhYmFzZUNvbmZpZ1NlcnZpY2Uub3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbiAgICB9XG5dOyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IENoYXRzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBwYXJ0aWNpcGFudHM6IFtTdHJpbmddLFxufSk7IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZXNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0ZXh0OiBTdHJpbmcsXG4gICAgY2hhdElkOiBTdHJpbmcsXG4gICAgZGF0ZTogRGF0ZSxcbiAgICB1c2VySWQ6IFN0cmluZ1xufSk7IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIHBhc3N3b3JkOiBTdHJpbmcsXG4gICAgdG9rZW46IFN0cmluZ1xufSk7IiwiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2FwaS9hcGkubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuZGVjbGFyZSBjb25zdCBtb2R1bGU6IGFueTtcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuXHRjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoQXBpTW9kdWxlLCB7IGNvcnM6IHRydWUgfSk7XG5cblx0Y29uc3QgYXBwQ29uZmlnOiBBcHBDb25maWdTZXJ2aWNlID0gYXBwLmdldCgnQXBwQ29uZmlnU2VydmljZScpO1xuXG5cdGFwcC5zZXRHbG9iYWxQcmVmaXgoJy9hcGkvMS4wJyk7XG5cblx0YXdhaXQgYXBwLmxpc3RlbihhcHBDb25maWcucG9ydCk7XG5cblx0aWYgKG1vZHVsZS5ob3QpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdCgpO1xuXHRcdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBhcHAuY2xvc2UoKSk7XG5cdH1cbn1cblxuYm9vdHN0cmFwKCk7XG4iLCJpbXBvcnQgeyBNb2R1bGUsIE5lc3RNb2R1bGUsIE1pZGRsZXdhcmVDb25zdW1lciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1vcmdhbk1pZGRsZXdhcmUgfSBmcm9tICdAbmVzdC1taWRkbGV3YXJlcy9tb3JnYW4nO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1vZHVsZSB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2RhdGFiYXNlLm1vZHVsZSc7XG5cbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGF0c01vZHVsZSB9IGZyb20gJy4vY2hhdHMvY2hhdHMubW9kdWxlJztcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlIH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFdlYnNvY2tldEdhdGV3YXkgfSBmcm9tICcuL3dlYnNvY2tldC5nYXRld2F5JztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBDb25maWdNb2R1bGUsXG4gICAgICAgIERhdGFiYXNlTW9kdWxlLFxuICAgICAgICBVc2Vyc01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZSxcbiAgICAgICAgQ2hhdHNNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VzTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtXZWJzb2NrZXRHYXRld2F5XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSBpbXBsZW1lbnRzIE5lc3RNb2R1bGUge1xuICAgIGNvbmZpZ3VyZShjb25zdW1lcjogTWlkZGxld2FyZUNvbnN1bWVyKSB7XG4gICAgICAgIE1vcmdhbk1pZGRsZXdhcmUuY29uZmlndXJlKCc6ZGF0ZSAtIDptZXRob2QgLSA6dXJsIC0gOnJlc3BvbnNlLXRpbWUgLSA6c3RhdHVzJyk7XG4gICAgICAgIGNvbnN1bWVyLmFwcGx5KE1vcmdhbk1pZGRsZXdhcmUpLmZvclJvdXRlcygnKicpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBQb3N0LCBSZXF9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdH0gZnJvbSAnZXhwcmVzcyc7XG5cbkBDb250cm9sbGVyKCdhdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBAUG9zdCgnc2lnbmluJylcbiAgICBhc3luYyBzaWduaW4oQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuXG4gICAgfVxuXG4gICAgQFBvc3QoJ3NpZ251cCcpXG4gICAgYXN5bmMgc2lnbnVwKEBSZXEoKSByZXE6IFJlcXVlc3QpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbnVwKHJlcS5ib2R5KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC5jb250cm9sbGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbVXNlcnNNb2R1bGVdLFxuICAgIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoU2VydmljZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgVVNFUl9NT0RFTCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoVVNFUl9NT0RFTClcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kZWw6IE1vZGVsPFVzZXI+LFxuICAgICkge31cblxuICAgIGFzeW5jIHNpZ251cChhdXRoRGF0YTogb2JqZWN0KTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZE9uZSh7ZW1haWw6IGF1dGhEYXRhLmVtYWlsfSk7XG5cbiAgICAgICAgY29uc3QgdG9rZW4gPSBoZWxwZXJzLmdlbmVyYXRlVG9rZW4oZXhpc3RpbmdVc2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICBleGlzdGluZ1VzZXIudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFVzZXIgPSBuZXcgdGhpcy51c2VyTW9kZWwoeyB0b2tlbiwgLi4uYXV0aERhdGEgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkVXNlci5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBSZXEsIFBvc3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuL2NoYXRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENoYXQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NoYXQuaW50ZXJmYWNlJztcblxuQENvbnRyb2xsZXIoJ2NoYXRzJylcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhdHNTZXJ2aWNlOiBDaGF0c1NlcnZpY2UpIHt9XG5cbiAgICBAR2V0KCdtZScpXG4gICAgYXN5bmMgZ2V0TWUoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8Q2hhdFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXRzU2VydmljZS5nZXRNZShyZXEucXVlcnkudG9rZW4pO1xuICAgIH1cblxuICAgIEBQb3N0KClcbiAgICBhc3luYyBjcmVhdGUoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8Q2hhdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGF0c1NlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgQ2hhdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jaGF0cy5jb250cm9sbGVyJztcbmltcG9ydCB7IENoYXRzU2VydmljZSB9IGZyb20gJy4vY2hhdHMuc2VydmljZSc7XG5pbXBvcnQgeyBjaGF0UHJvdmlkZXJzIH0gZnJvbSAnLi9jaGF0cy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VNb2R1bGUsIFVzZXJzTW9kdWxlXSxcbiAgICBjb250cm9sbGVyczogW0NoYXRzQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENoYXRzU2VydmljZSxcbiAgICAgICAgLi4uY2hhdFByb3ZpZGVyc1xuICAgIF0sXG4gICAgZXhwb3J0czogY2hhdFByb3ZpZGVyc1xufSlcblxuZXhwb3J0IGNsYXNzIENoYXRzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQ2hhdHNTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9zY2hlbWFzL2NoYXRzLnNjaGVtYSc7XG5cbmltcG9ydCB7IENIQVRfTU9ERUwsIFVTRVJfTU9ERUwsIERBVEFCQVNFX0NPTk5FQ1RJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgY2hhdFByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IENIQVRfTU9ERUwsXG4gICAgICAgIHVzZUZhY3Rvcnk6IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLm1vZGVsKCdDaGF0JywgQ2hhdHNTY2hlbWEpLFxuICAgICAgICBpbmplY3Q6IFtEQVRBQkFTRV9DT05ORUNUSU9OXSxcbiAgICB9XG5dOyIsImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGF0IH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jaGF0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBVU0VSX01PREVMLCBDSEFUX01PREVMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXRzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoVVNFUl9NT0RFTClcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kZWw6IE1vZGVsPFVzZXI+LFxuICAgICAgICBASW5qZWN0KENIQVRfTU9ERUwpXG4gICAgICAgIHByaXZhdGUgY2hhdE1vZGVsOiBNb2RlbDxDaGF0PixcbiAgICApIHt9XG5cbiAgICBhc3luYyBnZXRNZSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxDaGF0W10+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSAgdGhpcy51c2VyTW9kZWwuZmluZE9uZSh7dG9rZW46IHRva2VufSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGF0TW9kZWwuZmluZCh7cGFydGljaXBhbnRJZHM6IGN1cnJlbnRVc2VyLl9pZH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKHBhcmFtczogT2JqZWN0KTogUHJvbWlzZTxDaGF0PiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kT25lKHt0b2tlbjogcGFyYW1zLnRva2VufSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnJlbnQgdXNlciBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IF8oW3VzZXIuX2lkLnRvU3RyaW5nKCksIC4uLnBhcmFtcy5jaGF0LnBhcnRpY2lwYW50c10pLnVuaXEoKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0NoYXQgPSBhd2FpdCB0aGlzLmNoYXRNb2RlbC5maW5kT25lKHtcbiAgICAgICAgICAgIHBhcnRpY2lwYW50czoge1xuICAgICAgICAgICAgICAgICRhbGw6IHBhcnRpY2lwYW50c1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdDaGF0KSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdDaGF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hhdCA9IG5ldyB0aGlzLmNoYXRNb2RlbCh7IHBhcnRpY2lwYW50cywgLi4ucGFyYW1zLmNoYXQgfSk7XG4gICAgICAgICAgICByZXR1cm4gY2hhdC5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBSZXEsIFBvc3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL21lc3NhZ2UuaW50ZXJmYWNlJztcblxuQENvbnRyb2xsZXIoJ21lc3NhZ2VzJylcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZXNTZXJ2aWNlOiBNZXNzYWdlc1NlcnZpY2UpIHt9XG5cbiAgICBAR2V0KCdtZScpXG4gICAgYXN5bmMgZ2V0TWUoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1NlcnZpY2UuZ2V0TWUocmVxLnF1ZXJ5LnRva2VuKTtcbiAgICB9XG5cbiAgICBAUG9zdCgpXG4gICAgYXN5bmMgY3JlYXRlKEBSZXEoKSByZXE6IFJlcXVlc3QpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNTZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSk7XG4gICAgfVxufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlc0NvbnRyb2xsZXIgfSBmcm9tICcuL21lc3NhZ2VzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IG1lc3NhZ2VzUHJvdmlkZXJzIH0gZnJvbSAnLi9tZXNzYWdlcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdHNNb2R1bGUgfSBmcm9tICcuLi9jaGF0cy9jaGF0cy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VNb2R1bGUsIFVzZXJzTW9kdWxlLCBDaGF0c01vZHVsZV0sXG4gICAgY29udHJvbGxlcnM6IFtNZXNzYWdlc0NvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNZXNzYWdlc1NlcnZpY2UsXG4gICAgICAgIC4uLm1lc3NhZ2VzUHJvdmlkZXJzXG4gICAgXSxcbiAgICBleHBvcnRzOiBtZXNzYWdlc1Byb3ZpZGVyc1xufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgTWVzc2FnZXNTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9zY2hlbWFzL21lc3NhZ2VzLnNjaGVtYSc7XG5cbmltcG9ydCB7IE1FU1NBR0VfTU9ERUwsIERBVEFCQVNFX0NPTk5FQ1RJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZXNQcm92aWRlcnMgPSBbXG4gICAge1xuICAgICAgICBwcm92aWRlOiBNRVNTQUdFX01PREVMLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT4gY29ubmVjdGlvbi5tb2RlbCgnTWVzc2FnZScsIE1lc3NhZ2VzU2NoZW1hKSxcbiAgICAgICAgaW5qZWN0OiBbREFUQUJBU0VfQ09OTkVDVElPTl0sXG4gICAgfVxuXTsiLCJpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvbWVzc2FnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2hhdC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBVU0VSX01PREVMLCBNRVNTQUdFX01PREVMLCBDSEFUX01PREVMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoVVNFUl9NT0RFTClcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kZWw6IE1vZGVsPFVzZXI+LFxuICAgICAgICBASW5qZWN0KE1FU1NBR0VfTU9ERUwpXG4gICAgICAgIHByaXZhdGUgbWVzc2FnZU1vZGVsOiBNb2RlbDxNZXNzYWdlPixcbiAgICAgICAgQEluamVjdChDSEFUX01PREVMKVxuICAgICAgICBwcml2YXRlIGNoYXRNb2RlbDogTW9kZWw8Q2hhdD4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgZ2V0TWUodG9rZW46IHN0cmluZyk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHRoaXMudXNlck1vZGVsLmZpbmRPbmUoe3Rva2VuOiB0b2tlbn0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyQ2hhdHMgPSBhd2FpdCB0aGlzLmNoYXRNb2RlbC5maW5kKHtwYXJ0aWNpcGFudHM6IGN1cnJlbnRVc2VyLl9pZH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VNb2RlbC5maW5kKHtjaGF0SWQ6IHskaW46IF8oY3VycmVudFVzZXJDaGF0cykucGx1Y2soJ19pZCcpfX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgLSBwYXJhbWV0ZXJzIG9iamVjdFxuICAgICAqIEBwYXJhbSBwYXJhbXMucXVlcnkgLSBxdWVyeSBzdHJpbmdcbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGUocGFyYW1zOiBPYmplY3QpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kT25lKHt0b2tlbjogcGFyYW1zLnRva2VufSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyB0aGlzLm1lc3NhZ2VNb2RlbChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIG1lc3NhZ2UudXNlcklkID0gY3VycmVudFVzZXIuX2lkO1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5zYXZlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUmVxLCBSZXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuQENvbnRyb2xsZXIoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHt9XG5cbiAgICBAR2V0KCdtZScpXG4gICAgYXN5bmMgZ2V0TWUoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0TWUocmVxLnF1ZXJ5LnRva2VuKTtcbiAgICB9XG5cbiAgICBAR2V0KClcbiAgICBhc3luYyBnZXQoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5nZXQocmVxLnF1ZXJ5KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2RhdGFiYXNlLm1vZHVsZSc7XG5cbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlcnNQcm92aWRlcnMgfSBmcm9tICcuL3VzZXJzLnByb3ZpZGVycyc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEYXRhYmFzZU1vZHVsZV0sXG4gICAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVc2Vyc1NlcnZpY2UsXG4gICAgICAgIC4uLnVzZXJzUHJvdmlkZXJzXG4gICAgXSxcbiAgICBleHBvcnRzOiB1c2Vyc1Byb3ZpZGVyc1xufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgVXNlcnNTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9zY2hlbWFzL3VzZXJzLnNjaGVtYSc7XG5cbmltcG9ydCB7IFVTRVJfTU9ERUwsIERBVEFCQVNFX0NPTk5FQ1RJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgdXNlcnNQcm92aWRlcnMgPSBbXG4gICAge1xuICAgICAgICBwcm92aWRlOiBVU0VSX01PREVMLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT4gY29ubmVjdGlvbi5tb2RlbCgnVXNlcicsIFVzZXJzU2NoZW1hKSxcbiAgICAgICAgaW5qZWN0OiBbREFUQUJBU0VfQ09OTkVDVElPTl0sXG4gICAgfVxuXTsiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVTRVJfTU9ERUwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChVU0VSX01PREVMKVxuICAgICAgICBwcml2YXRlIHVzZXJNb2RlbDogTW9kZWw8VXNlcj4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgZ2V0TWUodG9rZW46IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyTW9kZWwuZmluZE9uZSh7dG9rZW46IHRva2VufSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBhcmFtcyAtIHBhcmFtZXRlcnMgb2JqZWN0XG4gICAgICogQHBhcmFtIHBhcmFtcy5xdWVyeSAtIHF1ZXJ5IHN0cmluZ1xuICAgICAqL1xuICAgIGFzeW5jIGdldChwYXJhbXM6IE9iamVjdCk6IFByb21pc2U8VXNlcltdPiB7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChwYXJhbXMucXVlcnkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbi5lbWFpbCA9IHskcmVnZXg6IG5ldyBSZWdFeHAocGFyYW1zLnF1ZXJ5LCAnaScpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJNb2RlbC5maW5kKGNvbmRpdGlvbiwge2VtYWlsOiAxLCBfaWQ6IDF9KTtcbiAgICB9XG59IiwiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCB7XG4gICAgV2ViU29ja2V0R2F0ZXdheSxcbiAgICBXZWJTb2NrZXRTZXJ2ZXIsXG4gICAgU3Vic2NyaWJlTWVzc2FnZSxcbiAgICBPbkdhdGV3YXlDb25uZWN0aW9uLFxuICAgIE9uR2F0ZXdheURpc2Nvbm5lY3QsXG4gICAgV3NSZXNwb25zZVxufSBmcm9tICdAbmVzdGpzL3dlYnNvY2tldHMnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFNvY2tldCwgU2VydmVyIH0gZnJvbSAnc29ja2V0LmlvJztcblxuQFdlYlNvY2tldEdhdGV3YXkoMzMwMClcbmV4cG9ydCBjbGFzcyBXZWJzb2NrZXRHYXRld2F5IGltcGxlbWVudHMgT25HYXRld2F5Q29ubmVjdGlvbiwgT25HYXRld2F5RGlzY29ubmVjdCB7XG5cbiAgICBAV2ViU29ja2V0U2VydmVyKClcbiAgICBzZXJ2ZXI6IFNlcnZlcjtcblxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdDaGF0c0dhdGV3YXknKTtcblxuICAgIEBTdWJzY3JpYmVNZXNzYWdlKCdqb2luUm9vbXMnKVxuICAgIGpvaW5Sb29tcyhjbGllbnQ6IFNvY2tldCwgZGF0YTogU3RyaW5nW10pOiBXc1Jlc3BvbnNlPHVua25vd24+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGAke2NsaWVudC5pZH0gam9pbmVkIHRvIHJvb206ICR7ZGF0YX1gKTtcblxuICAgICAgICBjbGllbnQuam9pbihkYXRhKTtcblxuICAgICAgICByZXR1cm4geyBldmVudDogJ2pvaW5Sb29tcycsIGRhdGEgfTtcbiAgICB9XG5cbiAgICBAU3Vic2NyaWJlTWVzc2FnZSgnbWVzc2FnZScpXG4gICAgbWVzc2FnZShjbGllbnQ6IFNvY2tldCwgZGF0YTogT2JqZWN0KTogYW55IHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIudG8oZGF0YS5jaGF0SWQpLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLnRleHQpO1xuICAgIH1cblxuICAgIGFmdGVySW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdJbml0IHdlYnNvY2tldCBzZXJ2ZXInKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb25uZWN0aW9uKGNsaWVudDogU29ja2V0LCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjbGllbnQubGVhdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYENsaWVudCBjb25uZWN0ZWQ6ICR7Y2xpZW50LmlkfWApO1xuICAgIH1cblxuICAgIGhhbmRsZURpc2Nvbm5lY3QoY2xpZW50OiBTb2NrZXQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGBDbGllbnQgZGlzY29ubmVjdGVkOiAke2NsaWVudC5pZH1gKTtcbiAgICB9XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL1wiOiBcIi4vc3JjL3V0aWxzL2hlbHBlcnMvaW5kZXguanNcIixcblx0XCIuL2F1dGhcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2F1dGguanNcIixcblx0XCIuL2F1dGguanNcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2F1dGguanNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9zcmMvdXRpbHMvaGVscGVycy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3V0aWxzL2hlbHBlcnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGFzc3dvcmQpID0+IHtcblx0Y29uc3Qgc2FsdCA9IG5ldyBCdWZmZXIoRGF0ZS5ub3coKS50b1N0cmluZygpKTtcblxuXHR2YXIgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBzYWx0KTtcblx0aGFzaC51cGRhdGUocGFzc3dvcmQpO1xuXG5cdHJldHVybiBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG59OyIsImNvbnN0IGhlbHBlcnMgPSBbJ2F1dGgnXTtcblxuaGVscGVycy5mb3JFYWNoKChoZWxwZXJOYW1lKSA9PiB7XG5cdGNvbnN0IGhlbHBlciA9IHJlcXVpcmUoYC4vJHtoZWxwZXJOYW1lfWApO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHsuLi5oZWxwZXIsIC4uLm1vZHVsZS5leHBvcnRzfTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0LW1pZGRsZXdhcmVzL21vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy93ZWJzb2NrZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=