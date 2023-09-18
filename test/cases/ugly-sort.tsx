/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

// Sorted imports:
import { ResourceImage } from '@tidal/core/src/components/resourceImage/resourceImage';
import { TextImage } from '@tidal/core/src/components/textImage/textImage';
import TrashcanIcon from '@tidal/react-icons/lib/detail-view/trashcan';
import classnames from 'classnames';
import * as React from 'react';
import type { CombinedProps } from '@tidal/web/src/containers/profileImage/profileImage';
// eslint-disable-next-line import/extensions
import styles from './profileImage.module.css';

// Sorted type keys:
export type ClientApplication = {
  type: number;
  name: string;
  service: string;
};

// Sorted type union:
export type OnboardingStepName = 'BLOCK' | 'ALBUM_INFO' | 'CAST';

// Sorted object keys:
export function ProfileImageRepresentation({
  width,
  className,
  desiredWidth,
  resourceId,
}) {
  const style = {
    height: (() => {})(),
    width: (() => {})(),
  };

  // Sorted JSX props:
  return (
    <ResourceImage
      width={desiredWidth}
      className={classnames(styles.profilePicture, className)}
      desiredWidth={desiredWidth}
      resourceId={resourceId}
      type="profile"
    />
  );
}
