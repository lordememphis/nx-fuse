import { AcademyMockApi } from './apps/academy/api';
import { ChatMockApi } from './apps/chat/api';
import { ContactsMockApi } from './apps/contacts/api';
import { ECommerceInventoryMockApi } from './apps/ecommerce/inventory/api';
import { FileManagerMockApi } from './apps/file-manager/api';
import { HelpCenterMockApi } from './apps/help-center/api';
import { MailboxMockApi } from './apps/mailbox/api';
import { NotesMockApi } from './apps/notes/api';
import { ScrumboardMockApi } from './apps/scrumboard/api';
import { TasksMockApi } from './apps/tasks/api';
import { AuthMockApi } from './common/auth/api';
import { MessagesMockApi } from './common/messages/api';
import { NavigationMockApi } from './common/navigation/api';
import { NotificationsMockApi } from './common/notifications/api';
import { SearchMockApi } from './common/search/api';
import { ShortcutsMockApi } from './common/shortcuts/api';
import { UserMockApi } from './common/user/api';
import { AnalyticsMockApi } from './dashboards/analytics/api';
import { CryptoMockApi } from './dashboards/crypto/api';
import { FinanceMockApi } from './dashboards/finance/api';
import { ProjectMockApi } from './dashboards/project/api';
import { ActivitiesMockApi } from './pages/activities/api';
import { IconsMockApi } from './ui/icons/api';

export const mockApiServices = [
  AcademyMockApi,
  ActivitiesMockApi,
  AnalyticsMockApi,
  AuthMockApi,
  ChatMockApi,
  ContactsMockApi,
  CryptoMockApi,
  ECommerceInventoryMockApi,
  FileManagerMockApi,
  FinanceMockApi,
  HelpCenterMockApi,
  IconsMockApi,
  MailboxMockApi,
  MessagesMockApi,
  NavigationMockApi,
  NotesMockApi,
  NotificationsMockApi,
  ProjectMockApi,
  SearchMockApi,
  ScrumboardMockApi,
  ShortcutsMockApi,
  TasksMockApi,
  UserMockApi,
];
