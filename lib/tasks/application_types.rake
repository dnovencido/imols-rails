namespace :application_types do
  desc "TODO"
  task seed_types: :environment do
    ApplicationType.create!([{
      name: "New",
      code: "new"
    },
    {
      name: "Renewal",
      code: "ren"
    },
    {
      name: "Modification",
      code: "mod"
    },
    {
      name: "Construction Permit",
      code: "cp"
    },
    {
      name: "Radio Station License",
      code: "rsl"
    }
    ])
    p "Created #{ApplicationType.count} application types"
  end
end
