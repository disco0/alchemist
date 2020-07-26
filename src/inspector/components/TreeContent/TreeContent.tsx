import React, { Component } from "react";
import "./TreeContent.less";
import { getItemString } from "../TreeDiff/getItemString";
import JSONTree from "./../JSONTree";
import { TProtoMode } from "../../model/types";
import { renderPath, labelRenderer } from "../shared/sharedTreeView";

export interface ITreeContentProps{
	content: any
	path: string[]
	protoMode:TProtoMode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITreeContentDispatch {
	onInspectPath: (path: string[],mode:"replace"|"add") => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITreeContentState{
	
}

export type TTreeContent = ITreeContentProps & ITreeContentDispatch

export class TreeContent extends Component<TTreeContent, ITreeContentState> {

	constructor(props: TTreeContent) {
		super(props);

		this.state = {
		};
	}
	
	private labelRenderer = ([key, ...rest]: string[], nodeType?: string, expanded?: boolean, expandable?: boolean): JSX.Element => {
		return labelRenderer([key, ...rest], this.props.onInspectPath, nodeType, expanded, expandable);
	}

	private renderPath = () => {
		const { path, onInspectPath } = this.props;
		return renderPath(path, onInspectPath);
	}

	public getItemString = (type: any, data: any): JSX.Element => {
		return getItemString(type, data, true, false);
	}
	
	public render(): React.ReactNode {
		const { content,protoMode } = this.props;
		//console.log(content);
		return (
			<div className="TreeContent">
				<div className="path">
					{this.renderPath()}
				</div>
				
				{(content === undefined || content === null) ?
					"Content is missing. Please make sure that you selected descriptor and your pinned property exists"
					:
					<JSONTree
						labelRenderer={this.labelRenderer}
						data={content}
						getItemString={this.getItemString} // shows object content shortcut
						hideRoot={true}
						sortObjectKeys={true}
						protoMode={protoMode}
					/>					
				}
			</div>
		);
	}
}