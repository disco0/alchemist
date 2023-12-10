/* eslint-disable quotes */
import {getAtnInitialState} from "../atnDecoder/atnInitialState";
import {IInspectorState} from "./model/types";
import {getSorInitialState} from "../sorcerer/sorInitialState";



export function getInitialState(): IInspectorState {
	return {
		version: [13, 0, 0],
		selectedReferenceType: "layer",
		filterBySelectedReferenceType: "off",
		descriptorsGrouping: "eventName",
		inspector: {
			activeTab: "content",
			content: {
				viewType: "tree",
				search: "",
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			difference: {
				viewType: "tree",
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			dom: {
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			code: {
				viewType: "generated",
			},
			info: {
				showOptionalDocumentReference: true,
			},
		},
		descriptors: [
		],
		dispatcher: {
			snippets: [{content: `const batchPlay = require("photoshop").action.batchPlay;\n\nreturn await batchPlay([{"_obj": "invert"}],{});`}],
		},
		atnConverter: getAtnInitialState(),

		explicitlyVisibleTopCategories: ["listener", "dispatcher", "replies"],

		targetReference: {
			listener: {
				type: "listener",

			},
			dispatcher: {
				type: "dispatcher",

			},
			notifier: {
				type: "notifier",

			},
			replies: {
				type: "replies",

			},
			generator: {
				type: "generator",

			},
			application: {
				type: "application",
				filterProp: "off",
				properties: ["notSpecified"],
			},
			document: {
				type: "document",
				filterProp: "off",
				properties: ["notSpecified"],

				documentID: "selected",
				filterDoc: "off",


			},
			layer: {
				type: "layer",
				filterProp: "off",
				properties: ["notSpecified"],

				documentID: "selected",
				filterDoc: "off",

				filterLayer: "off",
				layerID: "selected",
			},
			path: {
				type: "path",
				filterProp: "off",
				properties: ["notSpecified"],

				documentID: "selected",
				filterDoc: "off",

				filterLayer: "off",
				layerID: "selected",

				filterPath: "off",
				pathID: "selected",
			},
			channel: {
				type: "channel",
				filterProp: "off",
				properties: ["notSpecified"],

				documentID: "selected",
				filterDoc: "off",

				filterLayer: "off",
				layerID: "selected",

				channelID: "selected",
				filterChannel: "off",
			},
			actions: {
				type: "actions",
				filterProp: "off",
				properties: ["notSpecified"],

				actionID: "none",
				filterAction: "off",

				actionSetID: "none",
				filterActionSet: "off",

				commandIndex: "none",
				filterCommand: "off",
			},
			timeline: {
				type: "timeline",
				filterProp: "off",
				properties: [],

			},
			animationFrameClass: {
				type: "animationFrameClass",
				filterProp: "off",
				properties: [],

			},
			animationClass: {
				type: "animationClass",
				filterProp: "off",
				properties: [],

			},
			historyState: {
				type: "historyState",
				filterProp: "off",
				properties: ["notSpecified"],

				filterHistory: "off",
				historyID: "selected",
			},
			snapshotClass: {
				type: "snapshotClass",
				filterProp: "off",
				properties: ["notSpecified"],

				filterSnapshot: "off",
				snapshotID: "selected",
			},
			guide: {
				type: "guide",
				filterProp: "off",
				properties: ["notSpecified"],

				documentID: "selected",
				filterDoc: "off",

				guideID: "none",
				filterGuide: "off",
			},
		},
		settings: {

			settingsVisible: false,
			/** Sometimes you can get data when object in reference array is selected. This option is intended to select that item automatically for you */
			fontSize: "size-default",
			makeRawDataEasyToInspect: false,
			selectReferenceBeforeGet: true,
			searchTerm: null,
			listenerFilter: {
				type: "none",
				exclude: [
					"select",
					"set",
				],
				include: [],
			},
			notifierFilter: {
				type: "none",
				exclude: [
					"layersFiltered",
					"toolModalStateChanged",
					"invokeCommand",
					"modalStateChanged",
					"historyStateChanged",
				],
				include: [],
			},
			lastHistoryID: -1,
			autoUpdateInspector: false,
			groupDescriptors: "strict",
			autoUpdateListener: false,
			// Don't worry Spy is helper tool to get additional data from PS if it is turned on
			autoUpdateSpy: false,
			lastSelectedItem: null,
			dontShowMarketplaceInfo: false,
			activeDescriptors: [],
			neverRecordActionNames: ["idle"],
			accordionExpandedIDs: [],
			properties: [
				{
					type: "application",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{
							group: "default",
							groupLabel: "Default",
							data: [
								{label: "$PnCK - paintCursorKind", value: "$PnCK"},
								{label: "active", value: "active"},
								{label: "autoShowHomeScreen", value: "autoShowHomeScreen"},
								{label: "available", value: "available"},
								{label: "backgroundColor", value: "backgroundColor"},
								{label: "brushes", value: "brushes"},
								{label: "brushSettingsLocks", value: "brushSettingsLocks"},
								{label: "buildNumber", value: "buildNumber"},
								{label: "cachePrefs", value: "cachePrefs"},
								{label: "colorPickerPrefs", value: "colorPickerPrefs"},
								{label: "colorSettings", value: "colorSettings"},
								{label: "controlColor", value: "controlColor"},
								{label: "currentToolOptions", value: "currentToolOptions"},
								{label: "defaultAppScript", value: "defaultAppScript"},
								{label: "displayPrefs", value: "displayPrefs"},
								{label: "documentArea", value: "documentArea"},
								{label: "exactPoints", value: "exactPoints"},
								{label: "experimentalFeatures", value: "experimentalFeatures"},
								{label: "exportAssetsPrefs", value: "exportAssetsPrefs"},
								{label: "eyeDropperSample", value: "eyeDropperSample"},
								{label: "fileSavePrefs", value: "fileSavePrefs"},
								{label: "fontLargeName", value: "fontLargeName"},
								{label: "fontLargeSize", value: "fontLargeSize"},
								{label: "fontList", value: "fontList"},
								{label: "fontSmallName", value: "fontSmallName"},
								{label: "fontSmallSize", value: "fontSmallSize"},
								{label: "foregroundColor", value: "foregroundColor"},
								{label: "generalPreferences", value: "generalPreferences"},
								{label: "globalAngle", value: "globalAngle"},
								{label: "gradientClassEvent", value: "gradientClassEvent"},
								{label: "gridMajor", value: "gridMajor"},
								{label: "gridMinor", value: "gridMinor"},
								{label: "guidesPrefs", value: "guidesPrefs"},
								{label: "hasMatchingOpenDoc", value: "hasMatchingOpenDoc"},
								{label: "highlightColorOption", value: "highlightColorOption"},
								{label: "historyLogPreferences", value: "historyLogPreferences"},
								{label: "historyPreferences", value: "historyPreferences"},
								{label: "homeScreenReady", value: "homeScreenReady"},
								{label: "homeScreenVisibility", value: "homeScreenVisibility"},
								{label: "hostName", value: "hostName"},
								{label: "hostVersion", value: "hostVersion"},
								{label: "interfaceBevelHighlight", value: "interfaceBevelHighlight"},
								{label: "interfaceBevelShadow", value: "interfaceBevelShadow"},
								{label: "interfaceBlack", value: "interfaceBlack"},
								{label: "interfaceBorder", value: "interfaceBorder"},
								{label: "interfaceButtonDarkShadow", value: "interfaceButtonDarkShadow"},
								{label: "interfaceButtonDownFill", value: "interfaceButtonDownFill"},
								{label: "interfaceButtonShadow", value: "interfaceButtonShadow"},
								{label: "interfaceButtonText", value: "interfaceButtonText"},
								{label: "interfaceButtonUpFill", value: "interfaceButtonUpFill"},
								{label: "interfaceCanvasColor", value: "interfaceCanvasColor"},
								{label: "interfaceIconFillActive", value: "interfaceIconFillActive"},
								{label: "interfaceIconFillDimmed", value: "interfaceIconFillDimmed"},
								{label: "interfaceIconFillSelected", value: "interfaceIconFillSelected"},
								{label: "interfaceIconFrameActive", value: "interfaceIconFrameActive"},
								{label: "interfaceIconFrameDimmed", value: "interfaceIconFrameDimmed"},
								{label: "interfaceIconFrameSelected", value: "interfaceIconFrameSelected"},
								{label: "interfaceOWLPaletteFill", value: "interfaceOWLPaletteFill"},
								{label: "interfacePaletteFill", value: "interfacePaletteFill"},
								{label: "interfacePrefs", value: "interfacePrefs"},
								{label: "interfaceRed", value: "interfaceRed"},
								{label: "interfaceStaticText", value: "interfaceStaticText"},
								{label: "interfaceToolTipBackground", value: "interfaceToolTipBackground"},
								{label: "interfaceToolTipText", value: "interfaceToolTipText"},
								{label: "interfaceTransparencyBackground", value: "interfaceTransparencyBackground"},
								{label: "interfaceTransparencyForeground", value: "interfaceTransparencyForeground"},
								{label: "interfaceWhite", value: "interfaceWhite"},
								{label: "interpolationMethod", value: "interpolationMethod"},
								{label: "keyboardFocus", value: "keyboardFocus"},
								{label: "kuiBrightnessLevel", value: "kuiBrightnessLevel"},
								{label: "layerThumbnailSize", value: "layerThumbnailSize"},
								{label: "layerVisibilityChangesAreUndoable", value: "layerVisibilityChangesAreUndoable"},
								{label: "limited", value: "limited"},
								{label: "localeInfo", value: "localeInfo"},
								{label: "modalDialogLevel", value: "modalDialogLevel"},
								{label: "modalToolLevel", value: "modalToolLevel"},
								{label: "mondoFilterLevel", value: "mondoFilterLevel"},
								{label: "MRUColorList", value: "MRUColorList"},
								{label: "multiUndoEnabled", value: "multiUndoEnabled"},
								{label: "numberOfActionSets", value: "numberOfActionSets"},
								{label: "numberOfCacheLevels", value: "numberOfCacheLevels"},
								{label: "numberOfCacheLevels64", value: "numberOfCacheLevels64"},
								{label: "numberOfDocuments", value: "numberOfDocuments"},
								{label: "osVersion", value: "osVersion"},
								{label: "panelList", value: "panelList"},
								{label: "panelUILockIsEnabled", value: "panelUILockIsEnabled"},
								{label: "pluginPicker", value: "pluginPicker"},
								{label: "pluginPrefs", value: "pluginPrefs"},
								{label: "PnCK", value: "PnCK"},
								{label: "preferencesFolder", value: "preferencesFolder"},
								{label: "presetManager", value: "presetManager"},
								{label: "recentFiles", value: "recentFiles"},
								{label: "recentFilesAsStrings", value: "recentFilesAsStrings"},
								{label: "regionCode", value: "regionCode"},
								{label: "rulerUnits", value: "rulerUnits"},
								{label: "scratchDiskPreferences", value: "scratchDiskPreferences"},
								{label: "showToolTips", value: "showToolTips"},
								{label: "size", value: "size"},
								{label: "tileSize", value: "tileSize"},
								{label: "tool", value: "tool"},
								{label: "toolsPreferences", value: "toolsPreferences"},
								{label: "toolSupportsBrushes", value: "toolSupportsBrushes"},
								{label: "toolSupportsBrushPresets", value: "toolSupportsBrushPresets"},
								{label: "transparencyGamutPreferences", value: "transparencyGamutPreferences"},
								{label: "transparencyPrefs", value: "transparencyPrefs"},
								{label: "typePreferences", value: "typePreferences"},
								{label: "unitsPrefs", value: "unitsPrefs"},
								{label: "useCacheForHistograms", value: "useCacheForHistograms"},
								{label: "used", value: "used"},
								{label: "vectorToolSettings", value: "vectorToolSettings"},
								{label: "VMStatus", value: "VMStatus"},
								{label: "watchSuspension", value: "watchSuspension"},
								{label: "welcomeScreen2", value: "welcomeScreen2"},
								{label: "workspaceList", value: "workspaceList"},
								{label: "workspacePreferences", value: "workspacePreferences"},
								{label: "z3DPrefs", value: "z3DPrefs"},
							],
						},
						{
							group: "hidden",
							groupLabel: "Hidden",
							data: [
								{label: "brush", value: "brush"},
								{label: "canvasBackgroundColors", value: "canvasBackgroundColors"},
								{label: "colorProfileList", value: "colorProfileList"},
								{label: "cursorCrosshair", value: "cursorCrosshair"},
								{label: "cursorShape", value: "cursorShape"},
								{label: "FileFormats", value: "FileFormats"},
								{label: "httpsCommandGet", value: "httpsCommandGet"},
								{label: "LoadedPluginsNames", value: "LoadedPluginsNames"},
								{label: "menuBarInfo", value: "menuBarInfo"},
								{label: "newDocPresetJSON", value: "newDocPresetJSON"},
								{label: "newDocPresetMRUlist", value: "newDocPresetMRUlist"},
								{label: "overscrollMode", value: "overscrollMode"},
								{label: "pixelScaleFactorList", value: "pixelScaleFactorList"},
								{label: "recentFileEntries", value: "recentFileEntries"},
								{label: "recentlyUsedCCLibrariesTemplateElements", value: "recentlyUsedCCLibrariesTemplateElements"},
								{label: "springLoadedTools", value: "springLoadedTools"},
								{label: "springLoadedToolsTimingSensitivity", value: "springLoadedToolsTimingSensitivity"},
							],
						}, {
							group: "1st",
							groupLabel: "First party only",
							data: [
								{label: "customPreference", value: "customPreference"},
								{label: "executablePath", value: "executablePath"},
								{label: "generatorStatus", value: "generatorStatus"},
								{label: "path", value: "path"},
								{label: "quickTimeInstalled", value: "quickTimeInstalled"},
								{label: "serialString", value: "serialString"},
								{label: "systemInfo", value: "systemInfo"},
								{label: "designSpaceLibrariesInfo", value: "designSpaceLibrariesInfo"},
							],
						},
					],
				},
				{
					type: "historyState",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "ID", value: "ID"},
						{label: "auto", value: "auto"},
						{label: "count", value: "count"},
						{label: "currentHistoryState", value: "currentHistoryState"},
						{label: "historyBrushSource", value: "historyBrushSource"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "name", value: "name"},
					],
				},
				{
					type: "snapshotClass",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "ID", value: "ID"},
						{label: "auto", value: "auto"},
						{label: "count", value: "count"},
						{label: "currentHistoryState", value: "currentHistoryState"},
						{label: "historyBrushSource", value: "historyBrushSource"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "name", value: "name"},
					],
				},
				{
					type: "layer",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{
							group: "default",
							groupLabel: "Default",
							data: [
								{label: "background", value: "background"},
								{label: "bounds", value: "bounds"},
								{label: "boundsNoEffects", value: "boundsNoEffects"},
								{label: "boundsNoMask", value: "boundsNoMask"},
								{label: "count", value: "count"},
								{label: "fillOpacity", value: "fillOpacity"},
								{label: "globalAngle", value: "globalAngle"},
								{label: "group", value: "group"}, // clipped
								{label: "hasUserMask", value: "hasUserMask"},
								{label: "hasVectorMask", value: "hasVectorMask"},
								{label: "itemIndex", value: "itemIndex"},
								{label: "layerFXVisible", value: "layerFXVisible"},
								{label: "layerID", value: "layerID"},
								{label: "layerKind", value: "layerKind"},
								{label: "layerLocking", value: "layerLocking"},
								{label: "layerSection", value: "layerSection"},
								{label: "mode", value: "mode"}, // blend mode
								{label: "name", value: "name"},
								{label: "opacity", value: "opacity"},
								{label: "targetChannels", value: "targetChannels"},
								{label: "visible", value: "visible"},
								{label: "visibleChannels", value: "visibleChannels"},
							],
						},
						{
							group: "optional",
							groupLabel: "Optional",
							data: [
								{label: "adjustment", value: "adjustment"},
								{label: "artboard", value: "artboard"},
								{label: "artboardEnabled", value: "artboardEnabled"},
								{label: "boundingBox", value: "boundingBox"},
								{label: "color", value: "color"},
								{label: "fillEnabled", value: "fillEnabled"},
								{label: "filterMaskDensity", value: "filterMaskDensity"},
								{label: "filterMaskFeather", value: "filterMaskFeather"},
								{label: "keyOriginType", value: "keyOriginType"},
								{label: "layer3D", value: "layer3D"},
								{label: "layerEffects", value: "layerEffects"},
								{label: "layerSectionExpanded", value: "layerSectionExpanded"},
								{label: "layerTransformation", value: "layerTransformation"},
								{label: "linkedLayerIDs", value: "linkedLayerIDs"},
								{label: "parentLayerID", value: "parentLayerID"},
								{label: "selection", value: "selection"},
								{label: "smartObject", value: "smartObject"},
								{label: "smartObjectMore", value: "smartObjectMore"},
								{label: "text", value: "text"},
								{label: "textKey", value: "textKey"},
								{label: "textWarningLevel", value: "textWarningLevel"},
								{label: "useAlignedRendering", value: "useAlignedRendering"},
								{label: "userMaskDensity", value: "userMaskDensity"},
								{label: "userMaskEnabled", value: "userMaskEnabled"},
								{label: "userMaskFeather", value: "userMaskFeather"},
								{label: "userMaskLinked", value: "userMaskLinked"},
								{label: "vectorMaskDensity", value: "vectorMaskDensity"},
								{label: "vectorMaskEmpty", value: "vectorMaskEmpty"},
								{label: "vectorMaskEnabled", value: "vectorMaskEnabled"},
								{label: "vectorMaskFeather", value: "vectorMaskFeather"},
							],
						},
						{
							group: "hidden",
							groupLabel: "Hidden",
							data: [
								{label: "AGMokeStyleInfo", value: "AGMokeStyleInfo"},
								{label: "AGMStrokeStyleInfo", value: "AGMStrokeStyleInfo"},
								{label: "animationProtection", value: "animationProtection"},
								{label: "channelRestrictions", value: "channelRestrictions"},
								{label: "generatorSettings", value: "generatorSettings"},
								{label: "hasFilterMask", value: "hasFilterMask"},
								{label: "json", value: "json"},
								{label: "layerPathComponentCount", value: "layerPathComponentCount"},
								{label: "layerSVGdata", value: "layerSVGdata"},
								{label: "layerVectorPointData", value: "layerVectorPointData"},
								{label: "metadata", value: "metadata"},
								{label: "pathBounds", value: "pathBounds"},
								{label: "preserveTransparency", value: "preserveTransparency"},
								{label: "proportionalScaling", value: "proportionalScaling"},
								{label: "videoLayer", value: "videoLayer"},
								{label: "XMPMetadataAsUTF8", value: "XMPMetadataAsUTF8"},
							],
						},
					],
				},
				{
					type: "path",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "AGMStrokeStyleInfo", value: "AGMStrokeStyleInfo"},
						{label: "count", value: "count"},
						{label: "flatness", value: "flatness"},
						{label: "ID", value: "ID"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "kind", value: "kind"},
						{label: "pathContents", value: "pathContents"},
						{label: "pathName", value: "pathName"},
						{label: "symmetryPath", value: "symmetryPath"},
						{label: "targetPath", value: "targetPath"},
					],
				},
				{
					type: "channel",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "ID", value: "ID"},
						{label: "alphaChannelOptions", value: "alphaChannelOptions"},
						{label: "channelName", value: "channelName"},
						{label: "count", value: "count"},
						{label: "histogram", value: "histogram"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "visible", value: "visible"},
					],
				},
				{
					type: "document",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{
							group: "default",
							groupLabel: "Default",
							data: [
								{label: "bigNudgeH", value: "bigNudgeH"},
								{label: "bigNudgeV", value: "bigNudgeV"},
								{label: "center", value: "center"},
								{label: "clippingPathInfo", value: "clippingPathInfo"},
								{label: "cloudDocument", value: "cloudDocument"},
								{label: "compositor", value: "compositor"},
								{label: "copyright", value: "copyright"},
								{label: "count", value: "count"},
								{label: "depth", value: "depth"},
								{label: "documentID", value: "documentID"},
								{label: "fileInfo", value: "fileInfo"},
								{label: "generatorSettings", value: "generatorSettings"},
								{label: "guidesVisibility", value: "guidesVisibility"},
								{label: "hasBackgroundLayer", value: "hasBackgroundLayer"},
								{label: "height", value: "height"},
								{label: "histogram", value: "histogram"},
								{label: "homeScreenReady", value: "homeScreenReady"},
								{label: "isCloudDoc", value: "isCloudDoc"},
								{label: "isDirty", value: "isDirty"},
								{label: "itemIndex", value: "itemIndex"},
								{label: "manage", value: "manage"},
								{label: "measurementScale", value: "measurementScale"},
								{label: "mode", value: "mode"},
								{label: "numberOfChannels", value: "numberOfChannels"},
								{label: "numberOfLayers", value: "numberOfLayers"},
								{label: "numberOfPaths", value: "numberOfPaths"},
								{label: "overscrollMode", value: "overscrollMode"},
								{label: "pixelScaleFactor", value: "pixelScaleFactor"},
								{label: "printColorHandling", value: "printColorHandling"},
								{label: "printCopies", value: "printCopies"},
								{label: "printCurrentPrinter", value: "printCurrentPrinter"},
								{label: "printerList", value: "printerList"},
								{label: "printOutput", value: "printOutput"},
								{label: "printOutputOptions", value: "printOutputOptions"},
								{label: "profile", value: "profile"},
								{label: "quickMask", value: "quickMask"},
								{label: "resolution", value: "resolution"},
								{label: "rulerOriginH", value: "rulerOriginH"},
								{label: "rulerOriginV", value: "rulerOriginV"},
								{label: "rulersVisibility", value: "rulersVisibility"},
								{label: "slices", value: "slices"},
								{label: "smartGuidesVisibility", value: "smartGuidesVisibility"},
								{label: "targetLayers", value: "targetLayers"},
								{label: "targetLayersIDs", value: "targetLayersIDs"},
								{label: "targetLayersIndexes", value: "targetLayersIndexes"},
								{label: "targetPathIndex", value: "targetPathIndex"},
								{label: "targetPathsVisibility", value: "targetPathsVisibility"},
								{label: "targetPathVisibility", value: "targetPathVisibility"},
								{label: "title", value: "title"},
								{label: "viewInfo", value: "viewInfo"},
								{label: "visible", value: "visible"},
								{label: "watchSuspension", value: "watchSuspension"},
								{label: "watermark", value: "watermark"},
								{label: "width", value: "width"},
								{label: "workPathIndex", value: "workPathIndex"},
								{label: "XMPMetadataAsUTF8", value: "XMPMetadataAsUTF8"},
								{label: "zoom", value: "zoom"},
							],
						},
						{
							group: "optional",
							groupLabel: "Optional",
							data: [
								{label: "points", value: "points"},
								{label: "EXIF", value: "EXIF"},
								{label: "fileReference", value: "fileReference"},
								{label: "format", value: "format"},
								{label: "colorSamplerList", value: "colorSamplerList"},
								{label: "compsList", value: "compsList"},
								{label: "countClass", value: "countClass"},
							],
						},
						{
							group: "hidden",
							groupLabel: "Hidden",
							data: [
								{label: "artboards", value: "artboards"},
								{label: "globalAngle", value: "globalAngle"},
								{label: "json", value: "json"},
								{label: "numberOfGuides", value: "numberOfGuides"},
								{label: "pageSetup", value: "pageSetup"},
								{label: "printSettings", value: "printSettings"},
								{label: "rulerPoints", value: "rulerPoints"},
								{label: "selection", value: "selection"},
								{label: "slicesVisibility", value: "slicesVisibility"},
								{label: "viewTransform", value: "viewTransform"},
							],
						},
					],
				},
				{
					type: "guide",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "ID", value: "ID"},
						{label: "count", value: "count"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "kind", value: "kind"},
						{label: "orientation", value: "orientation"},
						{label: "position", value: "position"},
						{label: "layerID", value: "layerID"},
					],
				},
				{
					type: "actions",
					list: [
						{label: "(not specified)", value: "notSpecified"},
						{label: "ID", value: "ID"},
						{label: "count", value: "count"},
						{label: "itemIndex", value: "itemIndex"},
						{label: "name", value: "name"},
						{label: "numberOfChildren", value: "numberOfChildren"},
						{label: "parentIndex", value: "parentIndex"},
						{label: "parentName", value: "parentName"},
					],
				},
				{
					type: "timeline",
					list: [
						{label: "enabled", value: "enabled"},
						{label: "hasMotion", value: "hasMotion"},
						{label: "time", value: "time"},
						{label: "currentFrame", value: "currentFrame"},
						{label: "duration", value: "duration"},
						{label: "frameCount", value: "frameCount"},
						{label: "frameRate", value: "frameRate"},
						{label: "documentTimelineSettings", value: "documentTimelineSettings"},
						{label: "workInTime", value: "workInTime"},
						{label: "workOutTime", value: "workOutTime"},
					],
				},
				{
					type: "animationFrameClass",
					list: [
						{label: "animationFrameDelay", value: "animationFrameDelay"},
						{label: "animationFrameReplace", value: "animationFrameReplace"},
					],
				},
				{
					type: "animationClass",
					list: [
						{label: "enabled", value: "enabled"},
						{label: "currentFrame", value: "currentFrame"},
						{label: "frameCount", value: "frameCount"},
						{label: "animationLoopCount", value: "animationLoopCount"},
					],
				},
			],
			maximumItems: 150,
			leftColumnWidthPx: 300,
			rightColumnWidthPx: 220,
			initialDescriptorSettings: {
				supportRawDataType: false,
				dialogOptions: "dontDisplay",
				modalBehavior: null,
				synchronousExecution: null,
			},
			indent: "space3",
			singleQuotes: false,
			codeImports: "require",
			codeWrappers: "modal",
			tokenify: true,

			hide_isCommand: true,
			hideDontRecord: true,
			hideForceNotify: true,
		},
		sorcerer: getSorInitialState(),
	};
}