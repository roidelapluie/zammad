# Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

class FormUpdater::Relation::TicketPriority < FormUpdater::Relation
  private

  def relation_type
    Ticket::Priority
  end
end
