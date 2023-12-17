namespace :radio_service_types do
  desc "TODO"
  task seed_types: :environment do
    RadioServiceType.create!([{
      name: "Fixed and Land Mobile",
      code: "flm"
    },
    {
      name: "Aeronautical",
      code: "ae"
    },
    {
      name: "Maritime",
      code: "mt"
    },
    {
      name: "Broadcast",
      code: "bc"
    },
    {
      name: "Others",
      code: "others"
    }
    ])
    p "Created #{RadioServiceType.count} radio service types"    
  end

end
