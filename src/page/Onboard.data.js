import { v4 as uuidv4 } from 'uuid';
import user from '../assests/icons/user.png';
import userGroup from '../assests/icons/userGroup.png';

export const StepsData = [
  {
    step: 1,
    key: uuidv4(),
    title: 'Welcome! First things first...',
    description: 'You can always change them later.',
    group: 'user',
    formFields: [
      {
        key: uuidv4(),
        type: 'text',
        placeholder: 'Steve Jobs',
        label: 'Full Name',
        inputId: 'fullName',
        group: 'user',
      },
      {
        key: uuidv4(),
        type: 'text',
        placeholder: 'Steve',
        label: 'Display Name',
        inputId: 'displayName',
        group: 'user',
      },
    ],
    button: {
      text: 'Create Workspace',
    },
  },
  {
    key: uuidv4(),
    step: 2,
    title: "Let's set up a home for all your work",
    description: 'You can always create another workspace later.',
    formFields: [
      {
        key: uuidv4(),
        type: 'text',
        placeholder: 'Eden',
        label: 'Workspace Name',
        inputId: 'workspaceName',
        group: 'workspace',
      },
      {
        key: uuidv4(),
        type: 'text',
        placeholder: 'Example',
        label: 'Workspace URL',
        inputId: 'workspaceURL',
        group: 'workspace',
        variant: 'inputGroup',
        groupText: 'www.eden.com/',
        labelSub: '(optional)',
      },
    ],
    button: {
      text: 'Create Workspace',
    },
  },
  {
    key: uuidv4(),
    step: 3,
    title: 'How are you planning to use Eden?',
    description: "We'll streamline your setup experience accordingly.",
    formCardOptions: [
      {
        key: uuidv4(),
        type: 'radio',
        description: 'Write better. Think more clearly. Stay organized.',
        title: 'For myself',
        value: 'myself',
        inputId: 'type',
        group: 'usedBy',
        icon: user,
      },
      {
        key: uuidv4(),
        type: 'radio',
        description: 'Wikis, docs, tasks & projects, all in one place.',
        title: 'With my team',
        value: 'team',
        inputId: 'type',
        group: 'usedBy',
        icon: userGroup,
      },
    ],
    button: {
      text: 'Create Workspace',
    },
  },
  {
    key: uuidv4(),
    step: 4,
    title: 'Congratulations',
    description: 'You have completed onboarding, you can start using the Eden!',
    button: {
      text: 'Launch Eden',
    },
  },
];
