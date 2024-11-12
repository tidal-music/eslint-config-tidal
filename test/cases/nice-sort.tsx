/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

// Sorted imports:
import classnames from 'classnames';
import * as React from 'react';

import { ResourceImage } from '@tidal/core/src/components/resourceImage/resourceImage';
import { TextImage } from '@tidal/core/src/components/textImage/textImage';

import TrashcanIcon from '@tidal/react-icons/lib/detail-view/trashcan';

import type { CombinedProps } from '@tidal/web/src/containers/profileImage/profileImage';

// eslint-disable-next-line import/extensions
import styles from './profileImage.module.css';

// Sorted type keys:
export type ClientApplication = {
  name: string;
  service: string;
  type: number;
};

// Sorted type union:
export type OnboardingStepName = 'ALBUM_INFO' | 'BLOCK' | 'CAST';

// Sorted object keys:
export function ProfileImageRepresentation({
  className,
  desiredWidth,
  resourceId,
  width,
}: {
  className: string;
  desiredWidth: number;
  resourceId: string;
  width: number;
}) {
  const style = {
    height: (() => {})(),
    width: (() => {})(),
  };

  // Sorted JSX props:
  return (
    <ResourceImage
      className={classnames(styles.profilePicture, className)}
      desiredWidth={desiredWidth}
      resourceId={resourceId}
      type="profile"
      width={desiredWidth}
    />
  );
}

export type SortDirection = 'ASC' | 'DESC';

export type SortOrderAndDirection = [
  OnboardingStepName | null | undefined,
  SortDirection | null | undefined,
];

export type Playlist = ClientApplication &
  SortOrderAndDirection & {
    readonly contentType: 'folderPlaylist' | 'playlist';
    readonly parent?: {
      readonly id: string;
      readonly name: string;
    };
    readonly trn?: string;
  };
