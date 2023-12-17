namespace :nature_service do
  desc "TODO"
  task seed_service: :environment do
    NatureService.create!([{
      name: "CV (Private)",
      code: "cv"
    },
    {
      name: "CO (Government)",
      code: "co"
    },
    {
      name: "CP (Public Correspondence)",
      code: "cp"
    }
    ])
    p "Created #{NatureService.count} nature service"       
  end
end
