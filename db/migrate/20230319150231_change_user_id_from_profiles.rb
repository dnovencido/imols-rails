class ChangeUserIdFromProfiles < ActiveRecord::Migration[7.0]
  def change
    rename_column(:profiles, :user_id, :admin_id)
  end
end
