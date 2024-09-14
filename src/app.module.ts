import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { TicketTrakingModule } from './ticket-traking/ticket-traking.module';
import { TicketTraking } from './ticket-traking/entities/ticket-traking.entity';
import { AnnouncementsModule } from './announcements/announcements.module';
import { BaileysModule } from './baileys/baileys.module';
import { BaileysMessagesModule } from './baileys-messages/baileys-messages.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CampaignSettingsModule } from './campaign-settings/campaign-settings.module';
import { CampaignShippingModule } from './campaign-shipping/campaign-shipping.module';
import { BaileysChatsModule } from './baileys-chats/baileys-chats.module';
import { ChatMessagesModule } from './chat-messages/chat-messages.module';
import { ChatsModule } from './chats/chats.module';
import { ChatUsersModule } from './chat-users/chat-users.module';
import { CompaniesModule } from './companies/companies.module';
import { CompanyCreditsModule } from './company-credits/company-credits.module';
import { ContactCustomFieldsModule } from './contact-custom-fields/contact-custom-fields.module';
import { ContactListItemsModule } from './contact-list-items/contact-list-items.module';
import { ContactListsModule } from './contact-lists/contact-lists.module';
import { ContactModule } from './contact/contact.module';
import { ContactTagsModule } from './contact-tags/contact-tags.module';
import { ContractsModule } from './contracts/contracts.module';
import { FilesModule } from './files/files.module';
import { FilesOptionsModule } from './files-options/files-options.module';
import { HelpCategoriesModule } from './help-categories/help-categories.module';
import { HelpsModule } from './helps/helps.module';
import { InvoicesModule } from './invoices/invoices.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsIntegrationsModule } from './notifications-integrations/notifications-integrations.module';
import { NotificationsIntegrationsSetupModule } from './notifications-integrations-setup/notifications-integrations-setup.module';
import { PaymentsModule } from './payments/payments.module';
import { PlansModule } from './plans/plans.module';
import { PromptsModule } from './prompts/prompts.module';
import { QueueIntegrationsModule } from './queue-integrations/queue-integrations.module';
import { QueueOptionsModule } from './queue-options/queue-options.module';
import { QueuesModule } from './queues/queues.module';
import { QuickMessagesModule } from './quick-messages/quick-messages.module';
import { ReasonForTransferModule } from './reason-for-transfer/reason-for-transfer.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { SchedulesModule } from './schedules/schedules.module';
import { SettingsModule } from './settings/settings.module';
import { SettingsAppearanceModule } from './settings-appearance/settings-appearance.module';
import { SettingsConnectionsModule } from './settings-connections/settings-connections.module';
import { SettingsSupportModule } from './settings-support/settings-support.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { TagsModule } from './tags/tags.module';
import { TasksModule } from './tasks/tasks.module';
import { TemplatesModule } from './templates/templates.module';
import { TemplatesConnectionsModule } from './templates-connections/templates-connections.module';
import { TicketNotesModule } from './ticket-notes/ticket-notes.module';
import { TicketsModule } from './tickets/tickets.module';
import { TicketTagsModule } from './ticket-tags/ticket-tags.module';
import { TokensModule } from './tokens/tokens.module';
import { TwilioConfigsModule } from './twilio-configs/twilio-configs.module';
import { UserAnnouncementsModule } from './user-announcements/user-announcements.module';
import { UserQueuesModule } from './user-queues/user-queues.module';
import { UserRatingsModule } from './user-ratings/user-ratings.module';
import { ValidationCodesModule } from './validation-codes/validation-codes.module';
import { WhatsappQueuesModule } from './whatsapp-queues/whatsapp-queues.module';
import { WhatsappsModule } from './whatsapps/whatsapps.module';
import { Tags } from './tags/entities/tag.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'xama',
      entities: [Users, TicketTraking,Tags],
      synchronize: false,
    }),
    TicketTrakingModule,
    AnnouncementsModule,
    BaileysModule,
    BaileysMessagesModule,
    CampaignsModule,
    CampaignSettingsModule,
    CampaignShippingModule,
    BaileysChatsModule,
    ChatMessagesModule,
    ChatsModule,
    ChatUsersModule,
    CompaniesModule,
    CompanyCreditsModule,
    ContactCustomFieldsModule,
    ContactListItemsModule,
    ContactListsModule,
    ContactModule,
    ContactTagsModule,
    ContractsModule,
    FilesModule,
    FilesOptionsModule,
    HelpCategoriesModule,
    HelpsModule,
    InvoicesModule,
    MessagesModule,
    NotificationsIntegrationsModule,
    NotificationsIntegrationsSetupModule,
    PaymentsModule,
    PlansModule,
    PromptsModule,
    QueueIntegrationsModule,
    QueueOptionsModule,
    QueuesModule,
    QuickMessagesModule,
    ReasonForTransferModule,
    ResetPasswordModule,
    SchedulesModule,
    SettingsModule,
    SettingsAppearanceModule,
    SettingsConnectionsModule,
    SettingsSupportModule,
    SubscriptionsModule,
    TagsModule,
    TasksModule,
    TemplatesModule,
    TemplatesConnectionsModule,
    TicketNotesModule,
    TicketsModule,
    TicketTagsModule,
    TokensModule,
    TwilioConfigsModule,
    UserAnnouncementsModule,
    UserQueuesModule,
    UserRatingsModule,
    ValidationCodesModule,
    WhatsappQueuesModule,
    WhatsappsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
