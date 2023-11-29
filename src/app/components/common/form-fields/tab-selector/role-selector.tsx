import React from 'react';
import {
  RoleCard,
  RoleImage,
  RoleLabel,
  RoleLabelWrapper,
  RolesWrapper,
} from './role-selector.style';
import {Control, useController} from 'react-hook-form';
// import {ROLE} from '../../../../../../constants/roles';

type Props = {
  control: Control<any>;
  name: string;
};

const tabs = [
  {
    id: 1,
    role: 'ROLE.CLIENT',
    image: 'https://i.imgur.com/QQcdHOS.png',
    label: 'Regular User',
  },
  {
    id: 2,
    role: 'ROLE.PROFESSIONAL',
    image: 'https://i.imgur.com/L8xqgzN.png',
    label: 'Professional User',
  },
];

const RoleSelector = ({control, name}: Props) => {
  const {
    field: {onChange, value},
  } = useController({
    name,
    control,
    defaultValue: tabs[0].role,
  });

  return (
    <RolesWrapper>
      {tabs.map(tab => (
        <RoleCard
          onPress={() => onChange(tab.role)}
          key={`user-tab-${tab.id}`}
          active={tab.role === value}>
          <RoleImage
            defaultSource={require('../../../../../assets/images/pro-empty.png')}
            source={{uri: tab.image}}
          />
          <RoleLabelWrapper active={tab.role === value}>
            <RoleLabel active={tab.role === value}>{tab.label}</RoleLabel>
          </RoleLabelWrapper>
        </RoleCard>
      ))}
    </RolesWrapper>
  );
};

export default RoleSelector;
