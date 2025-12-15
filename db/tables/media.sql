CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	upload_date date not null default now(),
    path VARCHAR(255) NOT NULL
);